var express = require('express');
var router = express.Router();

/*
* A Global route for app, to check health
*  */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
