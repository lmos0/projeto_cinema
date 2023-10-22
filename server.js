const express = require('express')
const app  = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const database = require('./database/models/database')
const Cinema = require('./database/models/cinema')

database.sync()

// const initializePassport = require('./passport-config')
// initializePassport(passport, email => users.find( user => user.email === email))

app.set('view engine', 'ejs') //set ejs, para poder usar variáveis
app.use(express.urlencoded({extended:false}))

const users = []

app.listen(3000)

app.get('/', (req, res) => {
    console.log("Servidor rodando")
    res.render('index.ejs')

}) 

app.get('/login', (req,res) => {
    res.render('login.ejs')
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

app.post('/movie', async(req,res) =>
{
    const {nome, preco} = req.body
    Cinema.create({nome, preco})
    return res.redirect('/')
    


})
