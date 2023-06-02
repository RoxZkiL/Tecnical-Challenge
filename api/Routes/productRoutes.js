const express = require("express");
const router = express.Router();

const productController = require("../Controllers/productControllers.js");

router.get("/product", productController.getAllProducts);

router.get("/products", productController.filterProducts);

module.exports = router;
