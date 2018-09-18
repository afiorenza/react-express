const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const http = require('http').Server(app);

app.set('port', process.env.PORT || 8080);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

http.listen(app.get('port'), '127.0.0.1', () => {
    console.log(`App running on port ${app.get('port')}`);
});

module.exports = app;
