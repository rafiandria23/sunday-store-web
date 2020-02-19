"use strict";

const createError = require("http-errors");
const verifyToken = require("../helpers/verify-token");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.token;
    const user = verifyToken(token, process.env.JWT_SECRET_KEY);
    req.user = user;
    next();
  } catch (err) {
    next(createError(400, "Invalid token!"));
  }
};
