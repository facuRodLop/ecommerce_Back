const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    dialectModule: require("pg"),
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const User = require("./User")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);
const Address = require("./Address")(sequelize, Model, DataTypes);
const Category = require("./Category")(sequelize, Model, DataTypes);
const Order = require("./Order")(sequelize, Model, DataTypes);

// Luego de definir los modelos, se pueden establecer relaciones
// entre los mismos...

User.hasMany(Order);
Order.belongsTo(User);
User.hasMany(Address);
Address.belongsTo(User);
Category.hasMany(Product);
Product.belongsTo(Category);

// Product.belongsToMany(Order, { through: "ProductOrders" });
// Order.belongsToMany(Product, { through: "ProductOrders" });

module.exports = {
  sequelize,
  User,
  Product,
  Category,
  Order,
  Address,
};
