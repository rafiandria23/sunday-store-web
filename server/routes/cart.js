"use strict";

const cartRouter = require("express").Router();
const CartController = require("../controllers/cart");

cartRouter.get("/", CartController.findAll);
cartRouter.get("/:cart_id", CartController.findOne);
cartRouter.post("/", CartController.create);
// cartRouter.put("/:cart_id", CartController.updateAll);
// cartRouter.patch("/:cart_id", CartController.updatePart);
cartRouter.delete("/:cart_id", CartController.destroy);


module.exports = cartRouter;