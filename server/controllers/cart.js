'use strict';

const { User, Cart, Product } = require('../models');
const createError = require('http-errors');

class CartController {
  static findAll(req, res, next) {
    Cart.findAll({ where: { UserId: req.user.id } })
      .then(result => {
        if (!result) {
          throw createError(404);
        } else {
          req.io.emit('reloadProducts');
          res.status(200).json({ carts: result });
        }
      })
      .catch(err => {
        next(err);
      });
  }

  static findOne(req, res, next) {
    Cart.findOne({
      where: { id: Number(req.params.cart_id), UserId: req.user.id }
    })
      .then(result => {
        if (!result) {
          throw createError(404);
        } else {
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
      amount: 1
    };

    Cart.findOne({ where: { ProductId: cartData.ProductId } })
      .then(foundCart => {
        if (!foundCart) {
          return Cart.create(cartData);
        } else {
          let cartAmount = foundCart.amount;
          return Cart.update(
            { amount: cartAmount + 1 },
            { where: { ProductId: cartData.ProductId } }
          );
        }
      })
      .then(cart => {
        if (typeof cart.amount !== 'undefined') {
          req.io.emit('reloadProducts');
          res
            .status(200)
            .json({ message: 'Successfully added to cart! Happy shopping!' });
        } else {
          req.io.emit('reloadProducts');
          res.status(201).json({
            carts: cart,
            message: 'Successfully added to cart! Happy shopping!'
          });
        }
      })
      .catch(err => {
        next(err);
      });
  }

  static updatePart(req, res, next) {
    const cartData = {
      CartId: Number(req.params.cart_id),
      amount: Number(req.body.amount)
    };

    Cart.update({ amount: cartData.amount }, { where: { id: cartData.CartId } })
      .then(result => {
        req.io.emit('reloadCarts');
        res.status(200).json({ message: 'Successfully updated amount!' });
      })
      .catch(err => {
        next(err);
      });
  }

  static checkout(req, res, next) {
    const { id } = req.user;
    const carts = req.body.carts;
    let checkoutData = [];

    carts.forEach(cart => {
      const amount = Number(cart.amount);
      const ProductId = Number(cart.productDetail.id);
      const currentProductStock = Number(cart.productDetail.stock);
      checkoutData.push(
        Product.update(
          { stock: currentProductStock - amount },
          { where: { id: ProductId } }
        )
      );
    });

    Cart.destroy({ where: { UserId: id } })
      .then(result => {
        return Promise.all(checkoutData);
      })
      .then(updatedProducts => {
        req.io.emit("reloadProducts");
        res.status(200).json({ updatedProducts });
      })
      .catch(err => {
        console.log(err.message);
        next(err);
      });
  }

  static destroy(req, res, next) {
    Cart.destroy({ where: { id: Number(req.params.cart_id) } })
      .then(result => {
        req.io.emit('reloadCarts');
        res.status(200).json({ message: 'Successfully deleted cart!' });
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = CartController;
