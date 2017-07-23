var express = require('express');
var router = express.Router();
var db = require('../bin/www');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with resources database');
});

module.exports = router;