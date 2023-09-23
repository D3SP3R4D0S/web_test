const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: '도서검색', pageName:'search.ejs' });
});

module.exports = router;