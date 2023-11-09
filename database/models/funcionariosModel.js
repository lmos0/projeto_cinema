const {DataTypes} = require('sequelize')
const database = require('./database')

const Funcionarios = database.define('funcionarios', {
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },

    user:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }


}) 

module.exports = Funcionarios