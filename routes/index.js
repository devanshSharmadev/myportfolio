var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Devansh Sharma' });
});
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'Devansh Sharma - About Me' });
});
router.get('/myskills', function(req, res, next) {
  res.render('myskills', { title: 'Devansh Sharma - My Skills' });
});
router.get('/myworks', function(req, res, next) {
  res.render('works', { title: 'Devansh Sharma - My Works' });
});
router.get('/connect', function(req, res, next) {
  res.render('connect', { title: 'Devansh Sharma - Connect' });
});

module.exports = router;
