"use strict";

const productRouter = require("express").Router();
const ProductController = require("../controllers/product");

productRouter.get("/", ProductController.findAll);
productRouter.get("/:product_id", ProductController.findOne);
productRouter.post("/", ProductController.create);
productRouter.put("/:product_id", ProductController.updateAll);
// productRouter.patch("/:product_id", ProductController.updatePart);
productRouter.delete("/:product_id", ProductController.destroy);

module.exports = productRouter;