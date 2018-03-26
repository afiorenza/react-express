const _ = require('lodash');
const Document = require('../models/documents');
const express = require('express');
const Form = require('../models/forms');

const router = express.Router();

router.get('/forms', (req, res) => {

  Form.findOne({name: 'default'}, (error, form) => {
    if (error)
      res.json({
        success: false,
        data: {}
      });

    res.json({
      success: false,
      data: form
    }); 
  });
});

router.post('/forms', (req, res) => {
  let {name, formData} = req.body;
  let newDocument = new Document();

  newDocument.name = name;
  newDocument.formData = formData;

  return newDocument.save(error => error
    ? res.json({
        success: false,
        message: 'Error saving on database.'
      })
    : res.json({
        success:true,
        message: 'Saved!'
      })
  );
});

router.post('/add-field', (req, res) => {
  let {key, type, title, defaultValue} = req.body;
  
  Form.findOne({name: 'default'}, (error, form) => {
    let {properties} = form;
    form.properties = Object.assign({}, properties, {
      [key]: {
        type,
        title,
        default: defaultValue
      }
    });

    form.save((error, updatedForm) => {
      return res.json({
        success: true,
        data: updatedForm
      });
    });
  });
});

module.exports = router;
