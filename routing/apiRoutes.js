module.exports = (function() {
    'use strict';
    var path = require("path");

    var externalRoutes = require('express').Router();
    console.log("hello");
    externalRoutes.get('/', function (req, res) {
        console.log("get / trying to look up " + path.join(__dirname, "../public/home.html"));
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    externalRoutes.get('/survey', function (req, res) {
        console.log("get /survey");
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    return externalRoutes;
})();
