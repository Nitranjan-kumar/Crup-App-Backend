const mongoose = require("mongoose");

const productschema = mongoose.Schema({
  name: {
    type: String, // Changed from "string" to String (correct type format in Mongoose)
    required: [true, "The name of the product is required"],
  },
  quantity: {
    type: Number, // Changed from "number" to Number (correct type format)
    default: 0,
    required: true,
  },
  price: {
    type: Number, // Changed from "number" to Number
    required: true,
    default: 0,
  },
  image: {
    required: false, 
    type: String, // Changed from "string" to String
  },
});

const Product = mongoose.model("Product", productschema);
module.exports = Product;
