var express = require('express');
var parser = require('body-parser');
var path = require('path');

// Routes

// route that sends the user to the home page
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname, "app/public/survey.html"));
    });
};