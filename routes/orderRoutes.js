const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/orderController");
const checkJwt = require("express-jwt");
// Routs of Orders:

orderRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));
orderRouter.post("/", orderController.store);

// orderRouter.get("/", orderController.index);

// orderRouter.get("/:id", orderController.show);

// orderRouter.patch("/:id", orderController.update);

// orderRouter.delete("/:id", orderController.destroy);
// ...

module.exports = orderRouter;
