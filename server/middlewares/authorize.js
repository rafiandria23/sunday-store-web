"use strict";

const { User, Product, Cart } = require("../models");
const createError = require("http-errors");

class Authorize {
  static productSuperAdmin(req, res, next) {
    User.findOne({ where: { id: req.user.id } })
      .then(foundUser => {
        if (!foundUser) {
          throw createError(404);
        }
        else {
          if (foundUser.role == "Super Admin") {
            next();
          }
          else {
            throw createError(401);
          }
        }
      })
      .catch(err => {
        next(err);
      });
  }

  // static product(req, res, next) {
  //   User.findOne({ where: { id: req.user.id } })
  //     .then(foundUser => {
  //       if (!foundUser) {
  //         throw createError(401);
  //       }
  //       else {
  //         next();
  //       }
  //     })
  //     .catch(err => {
  //       next(err);
  //     });
  // }

  static cart(req, res, next) {
    if (typeof req.params.cart_id != "undefined") {
      Cart.findOne({ where: { id: Number(req.params.cart_id) } })
        .then(foundCart => {
          if (foundCart.UserId == req.user.id) {
            next();
          } else {
            throw createError(401);
          }
        })
        .catch(err => {
          next(err);
        });
    }
    // else {
    //   Cart.findOne({ where: { UserId: req.user.id } })
    //     .then(foundCart => {
    //       if (!foundCart) {
    //         next();
    //       }
    //     })
    //     .catch(err => {
    //       next(err);
    //     });
    // }
  }
}

module.exports = Authorize;