const Clientes = require('../database/models/clientesModel')
const bcrypt = require('bcrypt')
const dotenv = require('dotenv').config()
const jwt = require('jsonwebtoken')

const registerCostumer = async (req, res) => {
    try {
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


const authCostumer = async (req, res) => {
    try {
        const { user, password } = req.body

        const userFound = await Clientes.findOne({
            where: {
                user: user
            }
        })

        if (!userFound) {
            return res.status(401).redirect('/login')
        }

        const passwordMatch = await bcrypt.compare(password, userFound.password)

        if (!passwordMatch) {
            return res.status(401).redirect('/login')
        }

        const accessToken = jwt.sign({ username: userFound.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
        const refreshToken = jwt.sign({ userId: userFound.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' })

        res.cookie('token', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000, path: '/' }) // não está disponível para o JS
        res.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 15 * 60 * 1000, path: '/' })
        console.log(accessToken)
        res.redirect('/session')




    }
    catch (error) {
        console.error('Falha ao logar', error)
        res.status(500).render('erro.ejs')
    }
}

module.exports = { registerCostumer, authCostumer }