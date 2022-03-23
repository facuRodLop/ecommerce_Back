module.exports = (sequelize, Model, DataTypes) => {
  class Category extends Model {}

  Category.init(
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
        type: DataTypes.TEXT,
      },
      picture: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "categories",
    },
  );

  return Category;
};
