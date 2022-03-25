module.exports = (sequelize, Model, DataTypes) => {
  class Address extends Model {}

  Address.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      line1: {
        type: DataTypes.STRING,
      },
      line2: {
        type: DataTypes.STRING,
      },
      city: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      postalCode: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "addresses",
    },
  );

  return Address;
};
