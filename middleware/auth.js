const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')


//mudar o nome
const verifyToken = (req, res, next) => {

  const accessToken = req.cookies.accessToken;

  try {
    if (!accessToken) {
      throw new Error('Token não encontrado');
    }

    const user = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    req.user = user
    next()
  } catch (error) {
    // res.clearCookie('jwt')
    console.log(accessToken)
    console.log(error)
    return res.status(403).json({ message: 'Invalid token' })
  }
};


module.exports = verifyToken