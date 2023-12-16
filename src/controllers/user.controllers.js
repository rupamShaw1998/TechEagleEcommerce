const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.models');

require('dotenv').config();

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email, phone, name, address, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, phone, name, address, password: hashedPassword, role });
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send('Authentication failed');
    }
    const isValidPassword = await bcrypt.compare(req.body.password, user.password);
    if (!isValidPassword) {
      return res.status(401).send('Authentication failed');
    }
    const SECRET_KEY = process.env.SECRET_KEY || "ThisIsSampleSecretKeyForTestingTheApp";
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).send(token);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
