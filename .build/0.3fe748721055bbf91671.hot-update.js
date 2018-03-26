exports.id = 0;
exports.modules = {

/***/ "./server.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _src = __webpack_require__("./src/index.js");

var _src2 = _interopRequireDefault(_src);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__("react-dom/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bodyParser = __webpack_require__("body-parser");
var express = __webpack_require__("express");
var fs = __webpack_require__("fs");
var path = __webpack_require__("path");
__webpack_require__("./config/mongo_conn.js");

var app = express();
var http = __webpack_require__("http").Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', Object({"BUILD_TARGET":"server"}).PORT || 4567);

app.use(express.static(__dirname));

app.get('*', function (req, res) {
    var html = '<!doctype html>\n  <html class="no-js" lang="">\n    <head>\n        <meta charset="utf-8">\n        <meta http-equiv="x-ua-compatible" content="ie=edge">\n        <title>Test forms</title>\n        <meta name="description" content="">\n        <meta name="viewport"\n        content="width=device-width,  initial-scale=1">\n    </head>\n    <body>\n        <div id="root">' + (0, _server.renderToString)(_react2.default.createElement(_src2.default, null)) + '</div>\n    </body>\n  </html>';

    res.send(html);
});

http.listen(app.get('port'), '127.0.0.1', function () {
    console.log('Running on ' + app.get('port'));
});

if (true) {
    module.hot.accept("./server.js", function () {
        http.removeListener('request', currentApp);
        http.on('request', app);
        currentApp = app;
    });
}

module.exports = app;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ })

};