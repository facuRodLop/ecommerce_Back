const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

// Routes of Users
userRouter.get("/users", userController.index);
userRouter.get("/users/:id", userController.show);

userRouter.post("/users", userController.store);

userRouter.patch("/users/:id", userController.update);

userRouter.delete("/users/:id", userController.destroy);
//...

module.exports = userRouter;
