const {DataTypes} = require('sequelize')
const database = require('./database')

const Screenings = database.define('Sessões',{
    id_session:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    horario:{
        type:DataTypes.DATE,
        allowNull:false
    },
    lugares_disponiveis:{
        type: DataTypes.INTEGER
    }
})

Screenings.belongsTo(Filmes,{foreignKey:'id_movie'})

module.exports = Screenings