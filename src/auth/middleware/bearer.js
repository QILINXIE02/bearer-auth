'use strict';

const jwt = require('jsonwebtoken');
const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    const decodedToken = jwt.verify(token, process.env.SECRET, { algorithms: ['RS256'] });

    const validUser = await users.authenticateToken(token);

    req.user = validUser;
    req.token = token;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(403).send('Invalid Login');
  }
};
