const express = require('express')
const router = express.Router()
const {registerCostumer} = require('../controller/clientesController')

//registro


router.get('/register', (req, res) => {
    res.render('clientesCadastro.ejs')
})

router.post('/register', registerCostumer)

router.get('/login', (req, res) =>{
    res.render('loginClientes.ejs')
})

router.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index.ejs')

}) 

module.exports = router