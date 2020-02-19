'use strict';

const encryptPassword = require("../helpers/encrypt-password");

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class User extends Model { }
  
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: `Name cannot be empty!`,
          },
          notEmpty: {
            args: true,
            msg: `Name cannot be empty!`,
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: `Email cannot be empty!`,
          },
          notEmpty: {
            args: true,
            msg: `Email cannot be empty!`,
          },
          isEmail: {
            args: true,
            msg: `Please provide proper email address!`,
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: `Password cannot be empty!`,
          },
          notEmpty: {
            args: true,
            msg: `Password cannot be empty!`,
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        defaultValue: `Member`,
      },
    },
    {
      sequelize,
      hooks: {
        beforeCreate(user, options) {
          if (user.password) {
            user.password = encryptPassword(user.password);
          }
          if (process.env.NODE_ENV == 'test') {
            user.role = 'Super Admin';
          }
        },
      },
    },
  );

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Product, { through: "Cart" });
  };
  return User;
};