

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('home');
    });

    var burgerModel = require('../models/burger');

    //this is our save burger route!!
    app.post('/saveBurger', function (req, res) {
        console.log('we hit the save burger route!!', req.body)
        burgerModel.create(['burgers_name', 'devoured'], [req.body.burger_name, false], function () {

        })
        // model
        //model calls orm
    });
}