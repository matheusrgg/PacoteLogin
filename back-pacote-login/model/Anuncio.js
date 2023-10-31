const { Sequelize } = require('sequelize');

const database = require('../db')



const Anuncio = database.define('Anuncio', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    regiao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    desconto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    distribuidora: {
        type: Sequelize.STRING,
        allowNull: false
    },
    multaCancelamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fidelidadeMinima: {
        type: Sequelize.STRING,
        allowNull: false
    },

})


module.exports = Anuncio;