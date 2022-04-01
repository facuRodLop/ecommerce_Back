const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {
    async validatePassword(pass) {
      return await bcrypt.compare(pass, this.password);
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      phone: {
        type: DataTypes.STRING,
      },
      token: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "users",
      paranoid: true,
    },
  );

  User.beforeCreate(async (user, options) => {
    user.password = await bcrypt.hash(user.password, 10);
  });

  return User;
};
