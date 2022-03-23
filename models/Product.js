module.exports = (sequelize, Model, DataTypes) => {
  class Product extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      picture: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INT,
      },
      stock: {
        type: DataTypes.INT,
      },
      isStandout: {
        type: DataTypes.BOOLEAN,
      },
      slug: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "product",
    }
  );

  return Product;
};
