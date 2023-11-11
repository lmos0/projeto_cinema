const express = require('express')
const router = express.Router()

//registro


router.get('/register', (req, res) => {
    res.render('clientesCadastro.ejs')
})

router.post('/register', async (req, res) => {
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

router.get('/login', (req, res) =>{
    res.render('loginClientes.ejs')
})

router.get('/', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'pages/index.html'))
    res.render('index.ejs')

}) 

module.exports = router