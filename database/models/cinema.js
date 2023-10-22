const {DataTypes} = require('sequelize')
const database = require('./database')

const Cinema = database.define('cinema', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    filme:{
        type:DataTypes.STRING(50)

    },
    preco:{
        type:DataTypes.DECIMAL,
        min:0

    }
})

module.exports = Cinema