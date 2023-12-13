const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')


//mudar o nome
const verifyToken = (req, res, next) => {

  const accessToken = req.cookies.accessToken || req.headers.authorization

  try {
    if (!accessToken) {
      return res.status(403).render('erroProibido.ejs')
      //throw new Error('Token não encontrado')

    }

    const user = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    req.user = user
    next()
  } catch (error) {
    // res.clearCookie('jwt')
    console.log(accessToken)
    console.log(error)
    return res.status(403).render('403.ejs')
  }
};


module.exports = verifyToken