var path = require('path');
var express = require('express');
var body_parser = require("body-parser");
config = require('./config/config');
logger = console;

var app = express();

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + '/webapps')));
app.use(body_parser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});


var server = app.listen(config.port, function () {
	var host = server.address().address;
	var port = server.address().port;
	logger.info("Application listening at http://%s:%s", host, port);
});


module.exports = app;
