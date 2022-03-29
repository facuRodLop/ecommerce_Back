const express = require("express");
const orderRouter = express.Router();
const orderController = require("../controllers/orderController");
// Routs of Orders:

// orderRouter.get("/", orderController.index);
// orderRouter.get("/:id", orderController.show);

orderRouter.post("/", orderController.store);

// orderRouter.patch("/:id", orderController.update);

// orderRouter.delete("/:id", orderController.destroy);
// ...

module.exports = orderRouter;
