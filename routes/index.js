/*eslint no-unused-vars: "off"*/
"use strict";

var express = require('express');
var router = express.Router();

var navbarItems = {
    "Hem": "/",
    "Om": "/about",
    "Redovisning": "/report"
};

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Hem',
        current: '/',
        navbar: navbarItems
    });
});

router.get('/about', function(req, res, next) {
    res.render('about', {
        title: 'Om',
        current: "/about",
        navbar: navbarItems
    });
});

router.get('/report', function(req, res, next) {
    res.render('report', {
        title: 'Redovisningar',
        current: '/report',
        navbar: navbarItems
    });
});

module.exports = router;
