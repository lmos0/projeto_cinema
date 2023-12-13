const express = require('express')
const router = express.Router()
const { registerCostumer, authCostumer, renderEmCartaz, buyTicket } = require('../controller/clientesController')
const verifyToken = require('../middleware/auth')


//registro


router.get('/register', (req, res) => {
    res.render('clientesCadastro.ejs')
})

router.post('/register', registerCostumer)

router.get('/login', (req, res) => {
    res.render('loginClientes.ejs')
})

router.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index.ejs')

})

router.post('/login', authCostumer, verifyToken)



router.get('/session', verifyToken, (req, res) => {
    res.render('sessionUser.ejs', { username: req.user })
})

router.get('/emcartaz', renderEmCartaz)

router.post('/emcartaz', buyTicket)


module.exports = router