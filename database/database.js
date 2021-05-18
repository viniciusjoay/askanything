const Sequelize = require("sequelize");

const connection = new Sequelize('db_askanything', 'root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;