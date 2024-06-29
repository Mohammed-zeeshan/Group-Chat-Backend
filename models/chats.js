const { Sequelize } = require('sequelize');

const sequelize = require('../util/database');

const Chats = sequelize.define('chats', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    message: Sequelize.STRING,
    userName: Sequelize.STRING,
    groupid: Sequelize.INTEGER,
}, {tableName: 'chats'});

module.exports = Chats;

