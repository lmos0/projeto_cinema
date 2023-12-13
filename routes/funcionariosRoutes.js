const express = require('express')
const router = express.Router()
const { postMovie, registerAdmins, getMovies, renderAdminLogin, deleteMovie, renderScreenings, createScreenings, authAdmin, deleteScreening } = require('../controller/funcionariosController')
const Screenings = require('../database/models/sessoesModel')
const verifyToken = require('../middleware/auth')
const { funcionarioLoginPage } = require('../routes/renderRoutes')


router.use(express.static('public'))

// rota padrão é http://localhost:3000/admin

router.get('/', renderAdminLogin) // carrega o arquivo funcionarios.ejs

router.post('/', authAdmin)


router.get('/cadastro', (req, res) => {
    res.render('funcionariosCadastro.ejs')
})

router.post('/cadastro', registerAdmins)
// buscar e postar filmes

router.get('/addmovie', (req, res) => {
    res.render('cadastroFilmes.ejs')
})

router.post('/addmovie', postMovie);

// buscar filmes no bd

router.get('/movies', verifyToken, getMovies)

router.post('/deletemovie', deleteMovie)

router.get('/sessoes', verifyToken, (req, res) => {
    res.render('cadastroSessoes.ejs')
})

router.post('/sessoes', createScreenings)

router.get('/programacao', verifyToken, renderScreenings)

router.get('/panel', verifyToken, (req, res) => {
    res.send('logado no Painel de Administração')
})

router.post('/programacao', deleteScreening)





module.exports = router