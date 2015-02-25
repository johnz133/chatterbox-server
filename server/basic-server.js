/* Import node's http module: */
var http = require("http");
var requestObject = require('./request-handler.js');
var handleRequest = requestObject.requestHandler;
var express = require('express');
var app = express();
var port = 3000;
var ip = "127.0.0.1";

app.use("/", express.static(__dirname + "/client1/"));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/classes/*', function (req, res) {
  handleRequest(req, res);
});

app.post('/classes/*', function (req, res) {
  handleRequest(req, res);
});

var server = app.listen(port, ip, function(){
  console.log("Listening on http://" + ip + ":" + port);
});
