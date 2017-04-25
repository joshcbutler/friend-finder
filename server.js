// Dependencies
var express = require('express');
var parser = require('body-parser');
var path = require('path');

// Sets up the express app
var app = express();
var PORT = 3306;

// Sets up the express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));