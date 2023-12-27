const jwt = require('jsonwebtoken');
const {signdb,coursedb} = require('../model/db');

    async function signup
    
    (req, res) {
        try {
          const { name, email, password } = req.body;
          const existingUser = await signdb.findOne({ email });
           console.log(existingUser)
          if (!existingUser) {
            let data=await signdb.create({name,email,password})
            return res.status(200).json({ message: 'signup  successfully' });
          }
          else{
            return res.status(400).json({"message":"email alredy exist"})
          }
        } catch (error) {
          res.status(500).json({ message: 'Failed to create user' });
        }
      }

      async function login (req, res) {
        try {
          const { email, password } = req.body;
          const user = await signdb.findOne({ email });
          console.log(user)
          if (user) {
            if(user.email==email&&user.password==password)
            {
                let seceret=jwt.sign({mail:email},'divyani123',{expiresIn:'1m'})
             return res.status(200).json({error:false, message: 'login successfully',seceret:seceret });
            }
            else{
                return res.json({error:true,"message":"invalid username or password"})
            }
          }
          else{
            return res.json({error:true,"message":"invalid credentials"}) 
          }
      
      }
      catch(err){
           return res.json({mesaage:err.message})
      }
    }
      
      async function fetchCourses (req, res){
        try {
          let data=await coursedb.find(); 
          res.status(200).json(data);
        } catch (error) {
          res.status(500).json({ message: 'Failed to fetch courses' });
        }
    }
      
      
    module.exports = {signup,login,fetchCourses}      
    
