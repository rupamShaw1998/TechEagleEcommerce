const express = require('express');
const Order = require('../models/order.models');

const router = express.Router();

router.post('/place-order', async (req, res) => {
  try {
    const { customerId, products } = req.body;
    const order = await Order.create({ customerId, products });
    return res.status(201).send('Order placed successfully');
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.patch('/update-order/:orderId', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.orderId,
      { status: req.body.status },
      { new: true }
    );
    return res.status(200).send(updatedOrder);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
