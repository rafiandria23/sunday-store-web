"use strict";

module.exports = (err, req, res, next) => {
  if (err) {
    console.log(err.message);
  }
};