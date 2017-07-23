var express = require('express');
var router = express.Router();
var db = require('../bin/www');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var database = db.db();
  var cursor = database.collection('products').find().toArray(function(err, results) {
  res.send(results);
})
});

module.exports = router;