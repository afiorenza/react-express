var mongoose = require('mongoose');

var documentsSchema = mongoose.Schema({
  name: String,
  formData: Object
}, {
  strict: false
});

module.exports = mongoose.model('Documents', documentsSchema);