"use strict";

const indexRouter = require("express").Router();
const userRouter = require("./user");
const productRouter = require("./product");
// const cartRouter = require("./cart");

indexRouter.use("/", userRouter);
// authentication here...
indexRouter.use("/products", productRouter);
// indexRouter.use("/carts", cartRouter);

module.exports = indexRouter;