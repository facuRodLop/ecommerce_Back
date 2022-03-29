const productRoutes = require("./productRoutes");
const categoryRoutes = require("./categoryRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use(productRoutes);
  app.use(userRoutes);
  app.use(categoryRoutes);
  // app.use("/admin", adminRoutes);
};
