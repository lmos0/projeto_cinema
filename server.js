const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')


const adminRouter = require('./routes/funcionariosRoutes')
const clientesRouter = require('./routes/clientesRoutes')
const verifyToken = require('./middleware/auth')



const database = require('./database/models/database')
const Cinema = require('./database/models/cinemaModel')
const Clientes = require('./database/models/clientesModel')
const Filmes = require('./database/models/filmesModel')
const Lugares = require('./database/models/lugaresModel')
const Sessoes = require('./database/models/sessoesModel')
const Funcionarios = require('./database/models/funcionariosModel')

database.sync()

const PORT = 3000
const path = require('path')




app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(cookieParser())

app.use('/admin', adminRouter)
app.use('/', clientesRouter)
app.use('/session', verifyToken)



app.set('view engine', 'ejs')
//set ejs, para poder usar variáveis


app.listen(PORT, () => {
    console.log(`Servidor está rondando na porta ${PORT}`)
})



// rota de login do usuário
// app.get('/login', (req,res) => {
//     res.sendFile(path.resolve(__dirname, 'pages/login.html'))
// })
