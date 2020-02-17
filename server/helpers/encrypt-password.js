"use strict";

const bcrypt = require("bcrypt");

module.exports = (inputData) => {
  return bcrypt.hashSync(inputData, 10);
}