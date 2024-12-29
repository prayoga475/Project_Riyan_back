const {Sequelize} = require('sequelize');

//konfigurasi database
const sequelize = new Sequelize('crud', 'root', '',
{
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;