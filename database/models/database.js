const {Sequelize} = require('sequelize')
const sequelize = new Sequelize( {dialect: 'sqlite', storage:'./cinema.sqlite'})

sequelize.sync()
  .then(() => {
    console.log('Database is synchronized with the model.')
  })
  .catch((error) => {
    console.error('An error occurred while synchronizing the database:', error);
  })

module.exports = sequelize