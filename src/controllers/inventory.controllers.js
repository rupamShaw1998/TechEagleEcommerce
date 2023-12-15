const express = require('express');
const { Product } = require('../models/product.models');

const router = express.Router();

router.post('/add-product', async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      image: req.body.image,
      description: req.body.description,
      weight: req.body.weight,
      quantity: req.body.quantity,
      price: req.body.price,
    });
    await product.save();
    res.status(201).json({ message: 'Product added to inventory successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/get-inventory', async (req, res) => {
  try {
    const inventory = await Product.find();
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
