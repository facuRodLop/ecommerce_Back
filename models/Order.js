module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      products: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      paymentType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtotal: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      shipping: {
        type: DataTypes.DOUBLE,
      },
      total: {
        type: DataTypes.DOUBLE,
        allowNul: false,
      },
      shippingAddress: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "orders",
    },
  );

  return Order;
};
