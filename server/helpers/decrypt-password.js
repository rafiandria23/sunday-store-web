"use strict";

const bcrypt = require("bcrypt");

module.exports = (unHashed, hashed) => {
  return bcrypt.compareSync(unHashed, hashed);
};