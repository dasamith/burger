

module.exports = function (app) {
    var burgerModel = require('../models/burger');

    app.get('/', function (req, res) {
        burgerModel.all(function (data) {
            console.log("this is our data", data);

            res.render('home', { burgers: data });
        })


    });

    app.put('/devour/:id', function (req, res) {
        console.log("we hit the devour route", req.params)
        var updateObj = { devoured: true }
        var condition = ' id = ' + req.params.id


        burgerModel.update(updateObj, condition, function (data) {
            console.log("this is our data", data);

            res.render('home', { burgers: data });
        })


    });




    //this is our save burger route!!
    app.post('/saveBurger', function (req, res) {
        console.log('we hit the save burger route!!', req.body)
        burgerModel.create(['burgers_name', 'devoured'], [req.body.burger_name, false], function () {

        })
        // model
        //model calls orm
    });
}