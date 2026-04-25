import crypto from "crypto"
import razorpay from "../utils/razorpay.js";
import Payment from "../models/payment.model.js";
import User from "../models/user.model.js";
import { getCreditPlan } from "../configs/plans.js";

export const createOrder = async (req,res) => {
    try {
        const {planId} = req.body;
        const plan = getCreditPlan(planId);

        if (!plan) {
          return res.status(400).json({ message: "Invalid plan" });
    }

     const options = {
      amount: plan.amount * 100,
      currency: plan.currency,
      receipt: `receipt_${req.userId}_${Date.now()}`.slice(0, 40),
      notes: {
        userId: String(req.userId),
        planId: plan.id,
      },
    };

    const order = await razorpay.orders.create(options)

     await Payment.create({
      userId: req.userId,
      planId: plan.id,
      amount: plan.amount,
      aiCredits: plan.aiCredits,
      razorpayOrderId: order.id,
      status: "created",
    });

    return res.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      planId: plan.id,
      aiCredits: plan.aiCredits,
    });

    
    } catch (error) {
      console.log(error)
         return res.status(500).json({message:`failed to create Razorpay order ${error}`})
         
    }
}


export const verifyPayment = async (req,res) => {
    try {
      const {razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature} = req.body

      if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
        return res.status(400).json({ message: "Missing payment verification data" });
      }

      const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    const expectedBuffer = Buffer.from(expectedSignature);
    const actualBuffer = Buffer.from(razorpay_signature);

    if (
      expectedBuffer.length !== actualBuffer.length ||
      !crypto.timingSafeEqual(expectedBuffer, actualBuffer)
    ) {
      return res.status(400).json({ message: "Invalid payment signature" });
    }

     const payment = await Payment.findOne({
      razorpayOrderId: razorpay_order_id,
    });

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    if (String(payment.userId) !== String(req.userId)) {
      return res.status(403).json({ message: "Payment does not belong to this user" });
    }

    if (payment.status === "paid") {
      return res.json({ message: "Already processed" });
    }

    const razorpayPayment = await razorpay.payments.fetch(razorpay_payment_id);

    if (
      razorpayPayment.order_id !== razorpay_order_id ||
      razorpayPayment.status !== "captured" ||
      razorpayPayment.amount !== payment.amount * 100
    ) {
      return res.status(400).json({ message: "Payment capture validation failed" });
    }

    // Update payment record
    payment.status = "paid";
    payment.razorpayPaymentId = razorpay_payment_id;
    await payment.save();

    // Add credits to user
    const updatedUser = await User.findByIdAndUpdate(payment.userId, {
      $inc: { aiCredits: payment.aiCredits }
    },{new:true});

    res.json({
      success: true,
      message: "Payment verified and credits added",
      user: updatedUser,
    });

    } catch (error) {
         return res.status(500).json({message:`failed to verify Razorpay payment ${error}`})
    }
}
