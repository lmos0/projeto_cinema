const {Sequelize} = require('sequelize')
const sequelize = new Sequelize( {dialect: 'sqlite', host:'./cinema.sqlite'})

module.exports = sequelize