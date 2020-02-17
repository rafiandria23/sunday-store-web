"use strict";

const { User } = require("../models");
const generateToken = require("../helpers/generate-token");
const decryptPassword = require("../helpers/decrypt-password");

class UserController {
  static register(req, res, next) {
    const { name, email, password } = req.body;
    User.create({ name, email, password })
      .then(result => {
        res.status(201).json({ message: "Please login to continue!" });
      })
      .catch(err => {
        next(err);
      });
  }

  static login(req, res, next) {
    const { email, password } = req.body;
    User.findOne({ where: { email: email } })
      .then(result => {
        if (decryptPassword(password, result.password)) {
          const { name, email } = result;
          const generatedToken = generateToken({ name, email });
          res.status(200).json({ token: generatedToken });
        }
      })
      .catch(err => {
        next(err);
      });
  }
}

module.exports = UserController;