const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', error => {
  if (error) {
    console.log(`Error: ${error.toString()}`);
  }
});