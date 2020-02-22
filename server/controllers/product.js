"use strict";

const { Product } = require("../models");

class ProductController {
  static findAll(req, res, next) {
    Product.findAll()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        next(err);
      });
  }

  static findOne(req, res, next) {
    Product.findOne({ where: { id: Number(req.params.product_id) } })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        next(err);
      });
  }

  static create(req, res, next) {
    const { name, description, image_url, price, stock } = req.body;
    Product.create({ name, description, image_url, price, stock })
      .then(result => {
        req.io.emit('reloadProducts');
        res.status(201).json(result);
      })
      .catch(err => {
        next(err);
      });
  }

  static updateAll(req, res, next) {
    const { name, description, image_url, price, stock } = req.body;
    console.log(req.body);
    const ProductId = Number(req.params.product_id);
    Product.update({ name, description, image_url, price, stock }, { where: { id: ProductId } })
      .then(result => {
        req.io.emit('reloadProducts');
        res.status(200).json({ id: ProductId, name, description, image_url, price, stock });
      })
      .catch(err => {
        next(err);
      });
  }

  static destroy(req, res, next) {
    Product.destroy({ where: { id: Number(req.params.product_id) } })
      .then(result => {
        req.io.emit('reloadProducts');
        res.status(200).json({ message: "Successfully deleted product!" });
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = ProductController;
