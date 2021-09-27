const Sequelize = require('sequelize');
const config = require("../config/config.json");

const sequelize = new Sequelize(config.Database, config.DatabaseUsername, config.DatabasePassword, {
    host: config.DatabaseAddress + ':' + config.DatabasePort,
    dialect: config.DatabaseType
});

sequelize.define('users', require("./DBModels/usersModel"));
sequelize.define('refreshTokens', require("./DBModels/usersModel"));

module.exports = sequelize;