module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      paymentType: {
        type: DataTypes.STRING,
      },
      finalPrice: {
        type: DataTypes.INTEGER,
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
