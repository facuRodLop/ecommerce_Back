const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");
const checkJwt = require("express-jwt");

// Public user routes:
userRouter.post("/", userController.store);

// Login & logout (token de acceso):
userRouter.post("/login", userController.getToken);
// userRouter.post("/users/logout", userController.deleteToken);

// Token validator:
userRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));

// Private user routes:
userRouter.get("/", userController.index);
userRouter.get("/:id", userController.show);

userRouter.patch("/:id", userController.update);

userRouter.delete("/:id", userController.destroy);

//...

module.exports = userRouter;
