const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
// Routs of Products:
productRouter.get("/products", productController.index);
productRouter.get("/products/:id", productController.show);

productRouter.post("/products", productController.store);

productRouter.patch("/products/:id", productController.update);
productRouter.patch("/products/:id/sell", productController.sell);

productRouter.delete("/products/:id", productController.destroy);
// ...

module.exports = productRouter;