'use strict';

const { User, Cart, Product, Transaction } = require('../models');

class TransactionController {
  static create(req, res, next) {
    const carts = req.body.carts;
    let transactionCreateData = [];
    carts.forEach(cart => {
      const UserId = cart.UserId;
      const ProductId = cart.productDetail.id;
      const amount = cart.amount;
      const dateNow = new Date(Date.now());
      transactionCreateData.push(
        Transaction.create({ UserId, ProductId, amount, date: dateNow })
      );
    });
    Promise.all(transactionCreateData).then(result => {
      req.io.emit('reloadProducts');
      res.status(200).json({ transactions: result });
    })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = TransactionController;
