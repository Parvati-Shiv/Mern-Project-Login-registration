const jwt = require('jsonwebtoken');


const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
   jwt.verify(token,'divyani123')
   next() 
  } catch (error) {
    res.json({error:true,message:error.message})
  }
};

module.exports = authMiddleware;

