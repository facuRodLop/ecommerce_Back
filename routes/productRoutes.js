const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
// Products routes:
productRouter.get("/products", productController.index);
productRouter.get("/products/:id", productController.show);

productRouter.post("/products", productController.store);

productRouter.patch("/products/:id", productController.update);
productRouter.patch("/products/:id/sold", productController.sold);

productRouter.delete("/products/:id", productController.destroy);
// ...

module.exports = productRouter;
