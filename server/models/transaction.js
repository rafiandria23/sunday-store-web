'use strict';

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Transaction extends Model { }
  
  Transaction.init(
    {
      UserId: {
        type: DataTypes.INTEGER
      },
      ProductId: {
        type: DataTypes.INTEGER
      },
      amount: {
        type: DataTypes.INTEGER
      },
      date: {
        type: DataTypes.DATE
      }
    },
    { sequelize }
  );

  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.belongsTo(models.User);
  };

  return Transaction;
};