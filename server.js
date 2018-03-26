const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');
require('./config/mongo_conn');

const app  = express();
const http = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('port', process.env.PORT || 4567);

app.use(express.static(__dirname));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

http.listen(app.get('port'), '127.0.0.1', () => {
    console.log(`App running on port ${app.get('port')}`);
});

module.exports = app;
