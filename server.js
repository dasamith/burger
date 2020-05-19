var express = require("express");

const app = express()
const port = 3000

var connection = require('./config/connection.js')

app.get('/', function (req, res) {
    res.send('goota do control c!!!!')
})

app.listen(port, function () { console.log(`Example app listening at http://localhost:${port}`) })