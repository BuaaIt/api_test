require('dotenv').config();
var express = require('express'); 
var router = express.Router();
const app= express();
const pool = require('../db');
const port = 1337;
const fetch = require('node-fetch');
const jwt =require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const token = require('../controllers/TokenController');



router.get('/',function(req,res,next){
  res.render('json',{layout:false});
});

router.post('/',token.getAccessToken);

module.exports = router;
