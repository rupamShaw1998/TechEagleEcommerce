const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  weight: { type: Number },
  quantity: { type: Number },
  price: { type: Number },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
