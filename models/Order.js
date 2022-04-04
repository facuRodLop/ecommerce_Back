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
      finalPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
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
