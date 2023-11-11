const Funcionarios = require('../database/models/funcionariosModel')

const Filmes = require('../database/models/filmesModel')

const postMovie = async (req, res) => {
    const { titulo, genero, censura, duracao, is3d} = req.body;
    try {
      await Filmes.create({ titulo, genero,censura, duracao, is3d })
      res.redirect('/admin/getmovies')
    } catch (error) {
      console.error('Error creating movie:', error)
      res.redirect('/movie')
    }
  }

const deleteMovie = async (req, res) => {
  const {titulo} = req.body

  try {
    const deleteRows = await Filmes.destroy({
      where: {
        titulo: titulo,
      },
    })

      if (deleteRows > 0) {
        console.log(`O filme ${titulo} foi deletado com sucesso`)
        res.redirect('/admin/getmovies')
      }
      else{
        console.log('Filme não encontrado')
        res.redirect('/admin/getmovies')
      }
    }
  catch(error){
    console.error('Erro ao deleter o filme:', error)
    res.redirect('admin/getmovies')

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

  const renderAdminLogin = (req,res) =>{
    res.render('adminLogin.ejs')
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
  
    const LoginScreen = async (req,res) => {
      res.sendFile(path.resolve(__dirname, 'pages/adminLogin.html'))
    }

    module.exports = {postMovie, registerAdmins, getMovies, renderAdminLogin, deleteMovie}