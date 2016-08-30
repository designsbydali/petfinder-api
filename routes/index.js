var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Connect The Spots' });
});

router.get('/quiz', function(req, res, next) {
  res.render('quiz', { title: 'Connect The Spots' });
});

router.get('/doglist', function(req, res, next) {
  res.render('doglist', { title: 'List' });
});

module.exports = router;
