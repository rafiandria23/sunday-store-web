'use strict';

const encryptPassword = require("../helpers/encrypt-password");

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class User extends Model { }
  
  User.init(
    {
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      hooks: {
        beforeCreate(user, options) {
          if (user.password) {
            user.password = encryptPassword(user.password);
          }
        }
      }
    }
  );

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Product, { through: "Cart" });
  };
  return User;
};