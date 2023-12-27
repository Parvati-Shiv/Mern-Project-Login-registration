const express = require('express');
const rout= require('./router/router');
const signdb =require('./model/db')
const cors = require('cors');
let app=express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',rout)


app.use((err,req,res,next)=>{

})

app.listen(4000,()=>{
    console.log("server is running on port 4000");
})