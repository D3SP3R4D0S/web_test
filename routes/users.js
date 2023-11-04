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

//마이 페이지
router.get('/mypage', function(req, res){
  res.render('index', {title:'마이페이지', pageName:'users/mypage.ejs'});
});

module.exports = router;
