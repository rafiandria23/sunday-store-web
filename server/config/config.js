"use strict";

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const dbDialect = "postgres";

module.exports = {
  development: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: dbDialect
  },
  test: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_TEST_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: dbDialect
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: dbDialect
  }
};