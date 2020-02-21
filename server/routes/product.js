"use strict";

const productRouter = require("express").Router();
const ProductController = require("../controllers/product");
const authenticate = require("../middlewares/authenticate");
const Authorize = require("../middlewares/authorize");

productRouter.get("/", ProductController.findAll);
productRouter.get("/:product_id", ProductController.findOne);
productRouter.use(authenticate);
productRouter.post("/", Authorize.productSuperAdmin, ProductController.create);
productRouter.put("/:product_id", Authorize.productSuperAdmin, ProductController.updateAll);
productRouter.delete("/:product_id", Authorize.productSuperAdmin, ProductController.destroy);

module.exports = productRouter;