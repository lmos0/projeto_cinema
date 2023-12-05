const express = require('express')
const router = express.Router()
const { postMovie, registerAdmins, getMovies, renderAdminLogin, deleteMovie, renderScreenings, createScreenings } = require('../controller/funcionariosController')
const { funcionarioLoginPage } = require('../routes/renderRoutes')


router.use(express.static('public'))

// rota padrão é http://localhost:3000/admin

router.get('/', renderAdminLogin) // carrega o arquivo funcionarios.ejs


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

router.get('/movies', getMovies)

router.post('/deletemovie', deleteMovie)

router.get('/createsession', renderScreenings)

router.post('/createsession', createScreenings)






module.exports = router