const { Sequelize } = require('sequelize')
const sequelize = new Sequelize({ dialect: 'sqlite', storage: './cinema.sqlite' })

sequelize.sync()
  .then(() => {
    console.log('Database sincronizado com os models')
  })
  .catch((error) => {
    console.error('Ocorreu um erro', error)
  })

module.exports = sequelize