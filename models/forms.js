var mongoose = require('mongoose');

var formsSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: Date
}, {
  strict: false
});

module.exports = mongoose.model('Forms', formsSchema);
