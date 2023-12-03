const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()


//mudar o nome
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
  
    if (!authHeader) {
      return res.sendStatus(401);
    }
  
    const tokenParts = authHeader.split(' ')
  
    if (tokenParts.length !== 2) {
      return res.sendStatus(401);
    }
  
    const token = tokenParts[1];
  
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        console.error('Error verifying token:', err)
        return res.sendStatus(403);
      }
  
      req.user = decoded.username;
      next();
    });
  };
module.exports = verifyToken