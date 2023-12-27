const express = require('express');
let rout=express.Router();
let {login,signup,fetchCourses} = require('../contoler/controler')
const auth = require('../auth/auth');
rout.post('/login',login)
rout.post('/signup',signup);
rout.post('/fetchcourse',auth,fetchCourses)
module.exports=rout;