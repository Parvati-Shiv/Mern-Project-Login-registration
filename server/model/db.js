const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => console.log('Connected'));
let schema=new mongoose.Schema({
    email:String,
    name:String,
    password:String
})
let course=new mongoose.Schema({
    tittle:String,
    duration:Number
})
let signdb=mongoose.model('signup',schema);
let coursedb=mongoose.model('course',course)
module.exports={signdb,coursedb};