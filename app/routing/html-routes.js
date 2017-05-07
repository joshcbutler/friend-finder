var express = require('express');
var parser = require('body-parser');
var path = require('path');

// Routes
module.exports = function (app) {
    // Route that sends the user to the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(process.cwd(), "app/public/survey.html"));
    });
    app.get("/assets/style.css", function (req, res) {
        res.sendFile(path.join(process.cwd(), "app/public/assets/style.css"));
    });    
    // Route that sends the user to the home page defaults for all paths not served
    app.use("/", function (req, res, next) {
        res.sendFile(path.join(process.cwd(), "app/public/home.html"));
    });
};
