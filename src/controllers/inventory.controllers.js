const express = require('express');
const Product = require('../models/product.models');
const authTokenVerification = require('../middlewares/auth');

const router = express.Router();

router.post('/add-product', async (req, res) => {
  try {
    const { name, image, description, weight, quantity, price } = req.body;
    const product = await Product.create({ name, image, description, weight, quantity, price });
    return res.status(201).send('Product added to inventory successfully');
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get('/get-inventory', authTokenVerification, async (req, res) => {
  try {
    const inventory = await Product.find();
    return res.status(200).send(inventory);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
