import express from "express";
import dotenv from "dotenv";
import connectDB from "./configs/connectDB.js";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import componentRouter from "./routes/component.route.js";
import paymentRouter from "./routes/payment.route.js";

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "https://vyronui-aditya.onrender.com",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Allow requests without origin (like mobile apps or server-to-server)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      console.log("CORS blocked origin:", origin);
      return callback(new Error(`CORS blocked origin: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  if (["GET", "HEAD", "OPTIONS"].includes(req.method)) {
    return next();
  }

  const origin = req.get("origin");
  if (origin && !allowedOrigins.includes(origin)) {
    return res.status(403).json({ message: "Request origin is not allowed" });
  }

  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Vyron UI Backend Running" });
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/component", componentRouter);
app.use("/api/payment", paymentRouter);

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect database", error);
    process.exit(1);
  });
