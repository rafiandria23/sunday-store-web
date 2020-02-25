"use strict";

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;

  class Product extends Model {}

  Product.init(
    {
      name: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.TEXT
      },
      image_url: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.INTEGER
      },
      stock: {
        type: DataTypes.INTEGER
      }
    },
    { sequelize }
  );

  Product.associate = function(models) {
    // associations can be defined here
  };
  
  return Product;
};
