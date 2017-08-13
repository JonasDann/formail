var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/formail', {userMongoClient: true});

app.use(bodyParser.json());

var form = require("./models/form");

app.get('/api/form', function (req, res) {
    form.find(function(err, forms) {
        if (err) {
            res.send(err);
        }

        res.json(forms);
    });
});

app.post('/api/form', function (req, res) {
    form.create({
        id: req.body.id,
        name: req.body.name
    }, function(err, form) {
        if (err) {
            res.send(err);
        }

        res.json(form);
    })
});

app.delete('/api/form/:id', function (req, res) {
    form.remove({
        id: req.params.id
    }, function(err, form) {
        if (err) {
            res.send(err);
        }

        res.json(form);
    });
});

app.get('/:user_id', function (req, res) {
    res.send("Username: " + req.params.user_id);
});

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});