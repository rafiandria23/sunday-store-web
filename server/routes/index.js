"use strict";

const indexRouter = require("express").Router();
const userRouter = require("./user");
const productRouter = require("./product");
const authenticate = require("../middlewares/authenticate");
const cartRouter = require("./cart");
const transactionRouter = require("./transaction");

indexRouter.use("/users", userRouter);
indexRouter.use("/products", productRouter);
indexRouter.use(authenticate);
indexRouter.use("/carts", cartRouter);
indexRouter.use("/transactions", transactionRouter);

module.exports = indexRouter;