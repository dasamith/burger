var express = require("express");
var exphbs = require('express-handlebars');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const port = process.env.PORT

var connection = require('./config/connection.js')

require('./controllers/burger_controller.js')(app)

app.listen(port, function () { console.log(`Example app listening at http://localhost:${port}`) })
