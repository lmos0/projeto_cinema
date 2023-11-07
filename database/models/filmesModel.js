const {DataTypes} = require('sequelize')
const database = require('./database')

const Filmes = database.define('cinema', {
    id_movie:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },

    titulo:{
        type:DataTypes.STRING,
        allowNull:false
    },
    genero:{
        type:DataTypes.STRING,
        allowNull:true,
        
    },
    censura:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    duracao:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    "3D":{
        type:DataTypes.BOOLEAN,
        allowNull:false

    }
    
})

module.exports = Filmes