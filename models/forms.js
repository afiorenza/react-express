var mongoose = require('mongoose');

var formsSchema = mongoose.Schema({
  name: String,
  title: String,
  type: {type: String, default: 'object'},
  required: Array,
  properties: Object
}, {
  strict: false
});

module.exports = mongoose.model('Forms', formsSchema);