"use strict";

const transactionRouter = require("express").Router();
const TransactionController = require("../controllers/transaction");

transactionRouter.post("/", TransactionController.create);

module.exports = transactionRouter;
