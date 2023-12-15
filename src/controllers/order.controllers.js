const express = require('express');
const { Order } = require('../models/order.models');

const router = express.Router();

router.post('/place-order', async (req, res) => {
  try {
    const order = new Order({
      customerId: req.body.customerId,
      products: req.body.products,
    });
    await order.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.patch('/update-order/:orderId', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.orderId,
      { status: req.body.status },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
