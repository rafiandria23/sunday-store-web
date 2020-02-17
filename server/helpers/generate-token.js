"use strict";

const jwt = require("jsonwebtoken");

module.exports = (inputData) => {
  return jwt.sign(inputData, process.env.JWT_SECRET_KEY);
};