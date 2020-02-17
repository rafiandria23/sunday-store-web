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
      UserId: req.user.id,
      ProductId: req.body.product_id
    }
    Cart.create(cartData)
      .then(result => {
        res.status(201).json({ tasks: result });
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
