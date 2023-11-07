const express = require('express')
const app  = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const database = require('./database/models/database')
const Cinema = require('./database/models/cinemaModel')
const Clientes = require('./database/models/clientesModel')
const Filmes = require('./database/models/filmesModel')
const Lugares = require('./database/models/lugaresModel')
const Sessoes = require('./database/models/sessoesModel')

database.sync()

const PORT = 3000
const path = require('path')

// const initializePassport = require('./passport-config')
// initializePassport(passport, email => users.find( user => user.email === email))

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))


app.set('view engine', 'ejs')
 //set ejs, para poder usar variáveis

const users = []

app.listen(PORT, () => {
    console.log(`Servidor está rondando na porta ${PORT}`)
})


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    // res.render('index.ejs')

}) 

app.get('/login', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'pages/login.html'))
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.post('/register', async (req, res) => {
 try{
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    res.redirect('/login')
 } 
 catch{
    res.redirect('/register')

 }
 console.log(users)
})


app.get('/movie', (req,res) => {
    res.render('movie.ejs')
})

app.post('/movie', async (req, res) => {
    const { filme, preco } = req.body;
    try {
      await Cinema.create({ filme, preco });
      res.redirect('/');
    } catch (error) {
      console.error('Error creating movie:', error);
      res.redirect('/movie');
    }
  });
