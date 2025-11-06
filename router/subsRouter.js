import express from "express";

const subsRouter = express.Router();

subsRouter.get("/", (req, res) => {
  res.send({ title: "GET all subscriptions" });
});
subsRouter.get("/;id", (req, res) => {
  res.send({ title: "GET subscription details" });
});
subsRouter.post("/", (req, res) => {
  res.send({ title: "CREATE subscriptions" });
});
subsRouter.put("/:id", (req, res) => {
  res.send({ title: "UPDATE subscriptions" });
});
subsRouter.delete("/:id", (req, res) => {
  res.send({ title: "DELETE subscriptions" });
});
subsRouter.get("/users/:id", (req, res) => {
  res.send({ title: "GET all users subscriptions" });
});
subsRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "CANCEL subscriptions" });
});
subsRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET upcoming renewals" });
});

export default subsRouter;
