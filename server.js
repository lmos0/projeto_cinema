const express = require('express')
const app  = express()
const bcrypt = require('bcrypt')
const passport = require('passport')

const adminRouter = require('./routes/funcionariosRoutes')


const database = require('./database/models/database')
const Cinema = require('./database/models/cinemaModel')
const Clientes = require('./database/models/clientesModel')
const Filmes = require('./database/models/filmesModel')
const Lugares = require('./database/models/lugaresModel')
const Sessoes = require('./database/models/sessoesModel')
const Funcionarios = require('./database/models/funcionariosModel')

// database.sync()

const PORT = 3000
const path = require('path')

// const initializePassport = require('./passport-config')
// initializePassport(passport, email => users.find( user => user.email === email))

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use('/admin', adminRouter)

app.set('view engine', 'ejs')
 //set ejs, para poder usar variáveis


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
