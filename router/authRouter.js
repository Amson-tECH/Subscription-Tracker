import express from "express";

const authRouter = express.Router();

authRouter.post("/signup", (req, res) => {
  res.send({ title: "Sign Up" });
});
authRouter.post("/signin", (req, res) => {
  res.send({ title: "Sign In" });
});
authRouter.post("/signout", (req, res) => {
  res.send({ title: "Sign Out" });
});

export default authRouter;
