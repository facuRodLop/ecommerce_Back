const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
const checkJwt = require("express-jwt");

// Public product routes:
productRouter.get("/", productController.index);
productRouter.get("/:id", productController.show);

// Token validator:
productRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));

// Private product routes:
productRouter.post("/", productController.store);

productRouter.patch("/:id", productController.update);
productRouter.patch("/:id/sold", productController.sold);

productRouter.delete("/:id", productController.destroy);
// ...

module.exports = productRouter;
