const Funcionarios = require('../database/models/funcionariosModel')
const bcrypt = require('bcrypt')

const Filmes = require('../database/models/filmesModel');
const Screenings = require('../database/models/sessoesModel');

const postMovie = async (req, res) => {
  const { titulo, genero, censura, duracao, is3d } = req.body;
  try {
    await Filmes.create({ titulo, genero, censura, duracao, is3d })
    res.redirect('/admin/movies')
  } catch (error) {
    console.error('Error creating movie:', error)
    res.redirect('/movie')
  }
}

const deleteMovie = async (req, res) => {
  const { id_movie } = req.body

  try {
    const deleteRows = await Filmes.destroy({
      where: {
        id_movie: id_movie
        // deletar pelo id. botão pega o id, botão executa função deletar
      },
    })

    if (deleteRows > 0) {
      console.log(`O filme ${titulo} foi deletado com sucesso`)
      res.redirect('/admin/movies')
    }
    else {
      console.log('Filme não encontrado')
      res.redirect('/admin/movies')
    }
  }
  catch (error) {
    console.error('Erro ao deleter o filme:', error)
    res.redirect('/admin/movies')

  }
}



const getMovies = async (req, res) => {
  try {
    const movies = await Filmes.findAll()

    res.render('moviesList', { movies })
  }
  catch (error) {
    console.error('Falha ao recuperar os filmes no banco de dados', error)
    res.status(500).send('Interval Server Error')
  }
}

const renderAdminLogin = (req, res) => {
  res.render('adminLogin.ejs')
}

const registerAdmins = async (req, res) => {
  const { user, password } = req.body //controller
  try {
    await Funcionarios.create({ user, password })
    console.log(user, password)
    res.redirect('/')
  }
  catch (error) {
    console.log('Erro na criação', error)
    res.redirect('/')
  }

}

const LoginScreen = async (req, res) => {
  res.sendFile(path.resolve(__dirname, 'pages/adminLogin.html'))
}




const renderScreenings = async (req, res) => {
  const sessions = await Screenings.findAll({
    include: Filmes
  })

  res.render('programacao.ejs', { sessions })
}


const createScreenings = async (req, res) => {
  const { hora, lugares_disponiveis, id_movie, dia } = req.body

  try {
    const movieExists = await Filmes.findByPk(id_movie)


    if (!movieExists) {
      return res.status(404).json({ error: 'Filme não encontrado' })
    }
    //criando sessão

    const screening = await Screenings.create({ dia, lugares_disponiveis, hora, id_movie })

    res.status(201).json({ message: "Sessão criada com sucesso", screening })
  }

  catch (error) {
    console.error('Erro ao criar sessão', error)
    return res.status(500).json({ error: 'Erro interno no servidor' })

  }


}

module.exports = { postMovie, registerAdmins, getMovies, renderAdminLogin, deleteMovie, createScreenings, renderScreenings }