'use strict';

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Cart extends Model { }
  
  Cart.init(
    {
      UserId: {
        type: DataTypes.INTEGER
      },
      ProductId: {
        type: DataTypes.INTEGER
      },
      amount: {
        type: DataTypes.INTEGER
      }
    },
    { sequelize }
  );

  Cart.associate = function(models) {
    // associations can be defined here
    Cart.belongsTo(models.User);
  };
  
  return Cart;
};