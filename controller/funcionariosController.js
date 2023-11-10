const Funcionarios = require('../database/models/funcionariosModel')

const Filmes = require('../database/models/filmesModel')

const postMovie = async (req, res) => {
    const { titulo, genero, censura, duracao, is3d} = req.body;
    try {
      await Filmes.create({ titulo, genero,censura, duracao, is3d })
      res.redirect('/')
    } catch (error) {
      console.error('Error creating movie:', error)
      res.redirect('/movie')
    }
  }

  const getMovies = async (req,res) => {
    try{
        const movies = await Filmes.findAll()

        res.render('moviesList', {movies})
    }
    catch(error){
        console.error('Falha ao recuperar os filmes no banco de dados', error)
        res.status(500).send('Interval Server Error')
    }
  } 


const registerAdmins = async (req, res) =>{
    const {user,password} = req.body //controller
    try{
        await Funcionarios.create({user, password})
        console.log(user,password)
        res.redirect('/')
    }
    catch (error){
        console.log('Erro na criação', error)
        res.redirect('/')
    }
        
    }

    module.exports = {postMovie, registerAdmins, getMovies}