const {DataTypes} = require('sequelize')
const database = require('./database')

const Clientes = database.define('clientes',
{ id_cliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
},

user: {
    type: DataTypes.STRING,
    allowNull:false,
    unique:true
},

password:{
    type:DataTypes.STRING,
    allowNull:false,
},

nome:{
    type: DataTypes.STRING,
    allowNull:false
},

data_nacimento:{
    type: DataTypes.DATE,
    allowNull: true,
}


})

module.exports = Clientes
