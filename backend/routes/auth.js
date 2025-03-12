const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Register user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.send('User registered');
});

// Login user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.send('User logged in');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

module.exports = router;
