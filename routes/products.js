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

router.post('/', (req, res) => {
    var database = db.db();
    database.collection('products').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

module.exports = router;