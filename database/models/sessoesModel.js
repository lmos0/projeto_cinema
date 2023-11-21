const {DataTypes} = require('sequelize')
const database = require('./database')
const Filmes = require('./filmesModel')
const Lugares = require('./lugaresModel')

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
    } // percorrer a tabela e descobrir os lugares disponíveis 
})

Screenings.belongsTo(Filmes,{foreignKey:'id_movie'})
Filmes.hasMany(Screenings)
Screenings.hasOne(Lugares)


module.exports = Screenings

// Problema de Janela. Buscar todas as sessões que terminam depois do início da sessão iniciada/criada. Invalidar horários -> l