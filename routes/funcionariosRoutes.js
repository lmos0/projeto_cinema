const express = require('express')
const router = express.Router()
const {postMovie,registerAdmins,getMovies} = require('../controller/funcionariosController')
const {funcionarioLoginPage} = require('../routes/renderRoutes')

// rota padrão é http://localhost:3000/admin

router.get('/', funcionarioLoginPage ) // carrega o arquivo funcionarios.ejs


router.post('/', registerAdmins)

// buscar e postar filmes

router.get('/addmovie', (req,res) => {
    res.render('movie.ejs')
})

router.post('/addmovie', postMovie );

// buscar filmes no bd

router.get('/getmovies', getMovies)




module.exports = router