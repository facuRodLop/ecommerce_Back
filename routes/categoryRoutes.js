const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../controllers/categoryController");

// Rutas del Admin:
categoryRouter.get("/", categoryController.index);
categoryRouter.get("/:id", categoryController.show);

categoryRouter.post("/", categoryController.store);

categoryRouter.patch("/:id", categoryController.update);

categoryRouter.delete("/:id", categoryController.destroy);
// ...

module.exports = categoryRouter;
