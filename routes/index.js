const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '집에가고싶다', pageName:'home.ejs' });
});

module.exports = router;
