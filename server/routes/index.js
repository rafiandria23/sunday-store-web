"use strict";

const indexRouter = require("express").Router();
const userRouter = require("./user");
const productRouter = require("./product");
const authenticate = require("../middlewares/authenticate");
const cartRouter = require("./cart");

indexRouter.use("/", userRouter);
indexRouter.use("/products", productRouter);
indexRouter.use(authenticate);
indexRouter.use("/carts", cartRouter);

module.exports = indexRouter;