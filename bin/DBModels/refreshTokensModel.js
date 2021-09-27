let Sequelize = require('sequelize');

const refreshTokensModel = {
    userId: {
        type: Sequelize.INTEGER({unsigned: true}),
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    token: {
        type: Sequelize.CHAR(128),
        allowNull: false
    },
    creationDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    expirationDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    revoked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}

module.exports = refreshTokensModel;