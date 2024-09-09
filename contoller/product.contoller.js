const Product = require("../models/product.model"); // Import the Product model

// Fetch all products
const fetchproduct = async (req, res) => {
  try {
    const lightproduct = await Product.find(); // Fetch all products
    res.status(200).json(lightproduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch a single product by ID
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const resolveit = await Product.findById(id); // Fetch product by ID
    if (!resolveit) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(resolveit);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new product
const getproduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body); // Create a new product
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(505).json({ message: error.message });
  }
};


// Update a product by ID
const updateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true }); 
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  
  // Delete a product by ID
  const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const removedProduct = await Product.findByIdAndDelete(id);
  
      if (!removedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
  fetchproduct,
  getProductById, // Export the new fetch by ID function
  getproduct,
  updateProduct, // Export update function
  deleteProduct, // Export delete function
};
