const { Sequelize } = require('sequelize');

const database = require('../db')



const Fornecedor = database.define('Fornecedor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomeComercial: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cnpj: {
        type: Sequelize.STRING,
        allowNull: false
    },
    razaoSocial: {
        type: Sequelize.STRING,
        allowNull: true
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: true
    },
    logoTipo: {
        type: Sequelize.STRING,
        allowNull: true
    }

})


module.exports = Fornecedor;