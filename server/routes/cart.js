"use strict";

const cartRouter = require("express").Router();
const CartController = require("../controllers/cart");
const Authorize = require("../middlewares/authorize");

cartRouter.get("/", CartController.findAll);
cartRouter.get("/:cart_id", Authorize.cart, CartController.findOne);
cartRouter.post("/", Authorize.cart, CartController.create);
// cartRouter.put("/:cart_id", CartController.updateAll);
// cartRouter.patch("/:cart_id", CartController.updatePart);
cartRouter.delete("/:cart_id", Authorize.cart, CartController.destroy);

module.exports = cartRouter;