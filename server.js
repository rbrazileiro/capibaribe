// var app = require('express').createServer();

var express = require("express");
var app = express();

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.get('/tumblr', function (req, res) {
  res.sendfile(__dirname + '/capiba.html');
});

app.get('/*.(js|css|png|jpg)', function(req, res){
  res.sendfile(__dirname + '/assets'+req.url);
});

app.listen(80);
