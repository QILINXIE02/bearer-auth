// src/auth/middleware/token-generation.js

const jwt = require('jsonwebtoken');
const { users } = require('../models/index.js');

async function generateToken(req, res, next) {
  try {
    const user = req.user;

    const token = jwt.sign({ username: user.username }, process.env.SECRET, { expiresIn: '1h', algorithm: 'RS256' });

    const response = {
      user: {
        _id: user._id,
        username: user.username,
      },
      token: token,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error generating token:', error);
    next(error);
  }
}

module.exports = generateToken;
