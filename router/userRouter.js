import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "GET All users" });
});
userRouter.get("/:id", (req, res) => {
  res.send({ title: "GET user by id" });
});
userRouter.post("/", (req, res) => {
  res.send({ title: "CREATE new user" });
});
userRouter.put("/:id", (req, res) => {
  res.send({ title: "Update user" });
});
userRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delete a user" });
});

export default userRouter;
