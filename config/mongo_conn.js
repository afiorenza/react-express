const mongoose = require('mongoose');
const Forms = require('../models/forms');

const connect = () => {
  mongoose.connect('mongodb://localhost/test');
  let db = mongoose.connection;

  db
    .on('error', console.log)
    .on('open', () => {
      console.log('connected!');

      Forms.findOne({}, (error, forms) => {
        if (error) {
          console.log(`Error: ${error.toString()}`);
        } else if (!forms) {
          let defaultForm = new Forms();

          defaultForm.name = 'default';
          defaultForm.title = 'Test form';
          defaultForm.required = [];
          defaultForm.properties = {
            firstName: {
              type: 'string',
              title: 'First Name',
              default: ''
            },
            lastName: {
              type: 'string',
              title: 'Last Name',
              default: ''
            },
            isActive: {
              type: 'boolean',
              title: 'Active',
              default: false
            }
            
          }

          defaultForm.save(error => {
            if (error) console.log(`Error: ${error.toString()}`);
          });
        }
      });
    });
};

module.exports = {
  connect
};