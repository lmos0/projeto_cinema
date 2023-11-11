const Clientes = require('../database/models/clientesModel')
const bcrypt= require('bcrypt')

const registerCostumer = async (req, res) => {
    try{
       const hashedPassword = await bcrypt.hash(req.body.password, 10)
       await Clientes.create({
           user: req.body.user,
           nome: req.body.nome,
           email: req.body.email,
           data_nascimento: req.body.data_nascimento,
           password: hashedPassword
       })
       res.redirect('/login')
    } 
    catch (error) {
      console.log('Erro ao registrar usuário', error)
       res.redirect('/register')
   
    }
  
   }

   module.exports = {registerCostumer}