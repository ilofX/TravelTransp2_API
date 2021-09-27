let Sequelize = require('sequelize');

const usersModel = {
    id: {
        type: Sequelize.INTEGER({unsigned: true}),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
    },
    surname: {
        type: Sequelize.STRING
    },
    company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.CHAR(60),
        allowNull: false
    },
    totpKey: {
        type: Sequelize.CHAR(64)
    },
    permissions: {
        type: Sequelize.TINYINT({unsigned: true}),
        allowNull: false,
        defaultValue: 1
    },
    revoked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

module.exports = usersModel;