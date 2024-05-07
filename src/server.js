// server.js

'use strict';

const express = require('express');
const app = express();

// Define routes, middleware, etc.

module.exports = {
  start: function(port) {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
};
