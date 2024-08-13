const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.get("/", productController.getProducts); // GET all products

router.get("/:id", productController.getProductById); // GET product by id

router.post("/", productController.createProduct); // CREATE a new product

router.delete("/:id", productController.deleteProduct); // DELETE a product by id

router.put("/:id", productController.updateProduct); // UPDATE a product by id

module.exports = router;
