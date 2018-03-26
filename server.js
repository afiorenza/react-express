const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');
require('./config/mongo_conn');

import Application from './src';
import React from 'react'
import {renderToString} from 'react-dom/server'

var app  = express();
var http = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('port', process.env.PORT || 4567);

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  let html = `<!doctype html>
  <html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Test forms</title>
        <meta name="description" content="">
        <meta name="viewport"
        content="width=device-width,  initial-scale=1">
    </head>
    <body>
        <div id="root">${renderToString(<Application />)}</div>
    </body>
  </html>`;

  res.send(html);
});

http.listen(app.get('port'), '127.0.0.1', function(){
    console.log(`Running on ${app.get('port')}`);
});

if (module.hot) {
 module.hot.accept('./server', () => {
  http.removeListener('request', currentApp);
  http.on('request', app);
  currentApp = app;
 });
}

module.exports = app;
