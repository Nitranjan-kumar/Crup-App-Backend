const express = require("express");
const { fetchproduct, getProductById, getproduct, updateProduct, deleteProduct } = require("../contoller/product.contoller.js");

const router = express.Router();

// Define routes
router.get("/", fetchproduct); // Fetch all products
router.get("/:id", getProductById); // Fetch product by ID
router.post("/", getproduct); // Add new product
router.put("/:id", updateProduct); // Update product
router.delete("/:id", deleteProduct); // Delete product

module.exports = router;
