var express = require('express');
var parser = require('body-parser');
var path = require('path');

// Routes
function getFriendsArray() {
    return require(path.join(process.cwd(), "app/data/friends.json"));
}

function compareAnswers(answers1, answers2) {
    if (answers1.length != answers2.length) {
        console.warn("Answers must be same length arg1.length=" + answers1.length + " != arg2.length=" + answers2.length);
        return Number.MAX_VALUE; // cant happen
    }
    var difference = 0;
    for (var i = 0; i < answers1.length; i++) {
        difference += Math.abs(answers1[i] - answers2[i]);
    }
    return difference;
}

// route that sends the user to the home page
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.send(getFriendsArray());
    });

    app.post("/api/friends", function (req, res) {
        console.log("req.body=" + JSON.stringify(req.body));
        var friends = getFriendsArray();
        var bestMatchIndex = -1;
        var bestMatchDifference = Number.MAX_VALUE;
        for (var i = 0; i < friends.length; i++) {
            var difference = compareAnswers(friends[i].scores, req.body.answers);
            if (difference < bestMatchDifference) {
                bestMatchDifference = difference;
                bestMatchIndex = i;
            }
        }        
        var match = friends[bestMatchIndex];
        res.send(match);
    });
};
