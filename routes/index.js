const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {
  app.use("/products", productRoutes);
  app.use("/users", userRoutes);
  app.use("/orders", orderRoutes);
  app.use("/categories", categoryRoutes);
};
