const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

// Routes of Users
userRouter.get("/", userController.index);
userRouter.get("/:id", userController.show);

userRouter.post("/", userController.store);

userRouter.patch("/:id", userController.update);

userRouter.delete("/:id", userController.destroy);

// Login & logout (token de acceso)
userRouter.post("/login", userController.getToken);
// userRouter.post("/users/logout", userController.deleteToken);

//...

module.exports = userRouter;
