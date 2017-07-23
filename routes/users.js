var express = require('express');
var router = express.Router();
var db = require('../bin/www');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var database = db.db();
  var cursor = database.collection('users').find().toArray(function(err, results) {
    res.send(results);
  })
});

router.post('/', function(req, res, next) {
  var database = db.db();
  database.collection('users').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.send('respond with a user database');
  })
});


module.exports = router;
