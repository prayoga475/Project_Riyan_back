const {Sequelize} = require('sequelize');

//konfigurasi database
const sequelize = new Sequelize('dbfrom_correctly', 'dbfrom_correctly', 'cb80b0fec50bc10d290f0fab321d5a07ebb22ab0',{
    host: '008vw.h.filess.io',
    dialect: 'mysql',
    port: '3307',
    dialectModule: require('mysql2'),
    pool: {
        max: 5, // Maksimal koneksi aktif
        min: 0, // Minimal koneksi aktif
        acquire: 30000, // Waktu maksimal (dalam ms) untuk memperoleh koneksi sebelum timeout
        idle: 10000, // Waktu koneksi idle sebelum dilepaskan (dalam ms)
    },

});

module.exports = sequelize;