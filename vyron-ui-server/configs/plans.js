export const CREDIT_PLANS = {
  pro: {
    id: "pro",
    name: "Pro",
    amount: 99,
    aiCredits: 200,
    currency: "INR",
  },
};

export const getCreditPlan = (planId) => CREDIT_PLANS[planId];
