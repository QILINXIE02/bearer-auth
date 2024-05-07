'use strict';

module.exports = (err, req, res, next) => {
  console.error(err); // Log the error
  let error = { error: 'Server Error' }; // Avoid logging sensitive details
  res.status(err.status || 500);
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.json(error);
};
