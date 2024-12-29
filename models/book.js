const {DataTypes} = require('sequelize');
const sequelize = require('../config');

//Definisi model book
const Book = sequelize.define('Book', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
    },
    message: {
        type: DataTypes.TEXT,
    },
},{
    timestamps: true, //create dan update
});

module.exports = Book;