
require('dotenv').config()
var mysql = require('mysql');

var connection = mysql.createConnection(process.env.JAWSDB_URL);

// var connection = mysql.createConnection({
//     host: process.env.HOST,
//     port: process.env.PORT,
//     user: process.env.USER_NAME,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
// }
// );

connection.connect(function (err) {
    console.log('wer r connected!!')
});



module.exports = connection
