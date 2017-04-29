var express = require('express');
var parser = require('body-parser');
var path = require('path');

// Routes
module.exports = function(app){
// Route that sends the user to the home page

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
// Route that sends the user to the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
};
// Starts the server to begin listening
// app.listen(PORT, function() {
//     console.log("App is listening on PORT " + PORT);
// });