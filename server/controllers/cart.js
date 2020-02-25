"use strict";

const { User, Cart } = require("../models");
const createError = require("http-errors");

class CartController {
  static findAll(req, res, next) {
    Cart.findAll({ where: { UserId: req.user.id } })
      .then(result => {
        if (!result) {
          throw createError(404);
        }
        else {
          res.status(200).json({ carts: result });
        }
      })
      .catch(err => {
        next(err);
      });
  }

  static findOne(req, res, next) {
    Cart.findOne({ where: { id: Number(req.params.cart_id), UserId: req.user.id } })
      .then(result => {
        if (!result) {
          throw createError(404);
        }
        else {
          res.status(200).json({ carts: result });
        }
      })
      .catch(err => {
        next(err);
      });
  }

  static create(req, res, next) {
    const cartData = {
      UserId: Number(req.user.id),
      ProductId: Number(req.body.ProductId),
      stock: 1
    };

    Cart.findOne({ where: { ProductId: cartData.ProductId } })
      .then(foundCart => {
        if (!foundCart) {
          return Cart.create(cartData);
        } else {
          let cartStock = foundCart.stock;
          return Cart.update({ stock: cartStock + 1 }, { where: { ProductId: cartData.ProductId } });
        }
      })
      .then(cart => {
        if (typeof cart.stock !== "undefined") {
          res
            .status(200)
            .json({ message: 'Successfully added to cart! Happy shopping!' });
        } else {
          res
            .status(201)
            .json({
              carts: cart,
              message: 'Successfully added to cart! Happy shopping!'
            });
        }
      })
      .catch(err => {
        next(err);
      });
  }

  static destroy(req, res, next) {
    Cart.destroy({ where: { id: Number(req.params.cart_id) } })
      .then(result => {
        res.status(200).json({ message: "Successfully deleted cart!" });
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = CartController;
