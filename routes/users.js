const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/login", (req, res)=>{
  res.render('index', { title: 'LOGIN', pageName: 'users/login.ejs'});
})

router.get("/join", (req, res)=>{
  res.render('index', { title: 'JOIN', pageName: 'users/join.ejs'});
})

module.exports = router;
