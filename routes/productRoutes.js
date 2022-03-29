const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
// Products routes:
productRouter.get("/", productController.index);
productRouter.get("/:id", productController.show);

productRouter.post("/", productController.store);

productRouter.patch("/:id", productController.update);
productRouter.patch("/:id/sold", productController.sold);

productRouter.delete("/:id", productController.destroy);
// ...

module.exports = productRouter;
