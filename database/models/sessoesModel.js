const { DataTypes } = require('sequelize')
const database = require('./database')
const Filmes = require('./filmesModel')
const Lugares = require('./lugaresModel')

const Screenings = database.define('Sessões', {
    id_session: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    dia: {
        type: DataTypes.DATE,
        allowNull: false
    },
    lugares_disponiveis: {
        type: DataTypes.INTEGER
    }, // percorrer a tabela e descobrir os lugares disponíveis 

    hora: {
        type: DataTypes.TIME,
        allowNull: false
    }
})

Screenings.belongsTo(Filmes, { foreignKey: 'id_movie' })
Filmes.hasMany(Screenings)
Screenings.hasOne(Lugares)


module.exports = Screenings

// Problema de Janela. Buscar todas as sessões que terminam depois do início da sessão iniciada/criada. Invalidar horários -> l

// função que executa quando abrir a página de registro de sessões, ela vai buscar na tabel de filmes e vai aprsentar em um selection 