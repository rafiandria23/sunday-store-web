"use strict";

const jwt = require("jsonwebtoken");

module.exports = (inputToken) => {
  return jwt.verify(inputToken, process.env.JWT_SECRET_KEY);
};