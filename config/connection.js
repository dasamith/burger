
require('dotenv').config()
var mysql = require('mysql');

var connection = mysql.createConnection(
    process.env.JAWSDB_URL

);

connection.connect(function (err) {
    console.log('wer r connected!!', err)
});



module.exports = connection
