const { Sequelize } = require('sequelize');

const database = require('../db')



const Anuncio = database.define('Anuncio', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    estado: {
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

    inicioAnuncio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fimAnuncio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mediaConsumo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    multaCancelamento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nivelTensao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM("true", "false"),
        allowNull: false
    },
    whatsApp: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },




})


module.exports = Anuncio;