'use strict';

const { User } = require('../models');
const generateToken = require('../helpers/generate-token');
const decryptPassword = require('../helpers/decrypt-password');
const verifyToken = require('../helpers/verify-token');
const createError = require('http-errors');

class UserController {
  static register(req, res, next) {
    const { name, email, password } = req.body;
    User.findOne({ where: { email } })
      .then(foundUser => {
        if (foundUser) {
          throw createError(400, {
            name: 'SequelizeValidationError',
            errors: [
              {
                message: 'Email has already been taken!'
              }
            ]
          });
        } else {
          return User.create({ name, email, password });
        }
      })
      .then(result => {
        res.status(201).json({ message: 'Please login to continue!' });
      })
      .catch(err => {
        next(err);
      });
  }

  static login(req, res, next) {
    const { email, password } = req.body;
    const emailError = `Email cannot be empty!`;
    const passwordError = `Please enter password!`;
    if (!email) {
      next(createError(400, emailError));
    } else if (!password) {
      next(createError(400, passwordError));
    } else if (!email && !password) {
      next(createError(400, [emailError, passwordError]));
    } else {
      User.findOne({ where: { email }, include: ['Carts', 'Transactions'] })
        .then(result => {
          if (!result) {
            next(createError(400, { message: 'User not found!' }));
          } else if (decryptPassword(password, result.password)) {
            const { id, name, email, role, Carts, Transactions } = result;
            const generatedToken = generateToken({ id, name, email });
            res.status(200).json({
              token: generatedToken,
              userData: { id, name, email, role, Carts, Transactions }
            });
          } else {
            next(createError(400, { message: 'Wrong email or password!' }));
          }
        })
        .catch(err => {
          next(err);
        });
    }
  }

  static check(req, res, next) {
    const { token } = req.headers;
    const { id, name, email } = verifyToken(token);
    User.findOne({ where: { email }, include: ['Carts', 'Transactions'] })
      .then(result => {
        const { id, name, email, role, Carts, Transactions } = result;
        res.status(200).json({
          message: 'Verified!',
          currentUser: { id, name, email, role, Carts, Transactions }
        });
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = UserController;
