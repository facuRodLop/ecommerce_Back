const productRoutes = require("./productRoutes");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");

module.exports = (app) => {
  app.use(productRoutes);
  app.use(userRoutes);
  app.use("/admin", adminRoutes);
};
