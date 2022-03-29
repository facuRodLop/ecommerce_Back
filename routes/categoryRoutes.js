const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");

// Rutas del Admin:
categoryRouter.get("/categories", categoryController.index);
categoryRouter.get("/categories/:id", categoryController.show);

categoryRouter.post("/categories", categoryController.store);

categoryRouter.patch("/categories/:id", categoryController.update);

categoryRouter.delete("/categories/:id", categoryController.destroy);
// ...

module.exports = categoryRouter;
