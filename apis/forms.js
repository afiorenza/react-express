const _ = require('lodash');
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

module.exports = router;
