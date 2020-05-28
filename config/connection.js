
require('dotenv').config()
var mysql = require('mysql');

var connection = mysql.createConnection(
    process.env.JAWSDB_URL
    // {
    // host: 'localhost',
    // user: 'root',
    // password: process.env.DB_PASS,
    // database: 'burgers_db'
    // }

);

connection.connect(function (err) {
    console.log('wer r connected!!', err)
});



module.exports = connection
