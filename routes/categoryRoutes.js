const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");
const checkJwt = require("express-jwt");

// Public category routes:
categoryRouter.get("/", categoryController.index);
categoryRouter.get("/:id", categoryController.show);

// Token validator:
categoryRouter.use(checkJwt({ secret: process.env.ACCESS_TOKEN_SECRET, algorithms: ["HS256"] }));

// Private category routes:
categoryRouter.post("/", categoryController.store);

categoryRouter.patch("/:id", categoryController.update);

categoryRouter.delete("/:id", categoryController.destroy);
// ...

module.exports = categoryRouter;
