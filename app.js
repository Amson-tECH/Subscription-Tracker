import express from "express";
import { PORT } from "./config/env.js";
import authRouter from "./router/authRouter.js";
import userRouter from "./router/userRouter.js";
import subsRouter from "./router/subsRouter.js";
import connectTODatabase from "./database/mongodb.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Tracker API!");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter); 
app.use("/api/v1/subscriptions", subsRouter);

app.listen(PORT, async () => {
  console.log(
    `Subscription Tracker API is running on http://localhost:${PORT}`
  );

  await connectTODatabase();
});
