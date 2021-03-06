var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://formail-mongo:27017/formail', {userMongoClient: true});

app.use(cors());
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

app.get('/api/form/:id', function (req, res) {
    form.findOne({
        id: req.params.id
    }, function(err, form) {
        if (err) {
            res.send(err);
        }

        res.json(form);
    });
});

app.post('/api/form', function (req, res) {
    var inputForm = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        emails: req.body.emails,
        template: req.body.template,
        active: req.body.active
    };

    form.findOneAndUpdate({
        id: req.body.id
    }, inputForm, function(err, updatedForm) {
        if (err) {
            res.send(err);
        }
        
        if (updatedForm === null) {
            form.create(inputForm, function(err, form) {
                if (err) {
                    res.send(err);
                }

                res.json(form);
            });
        } else {
            res.json(updatedForm);
        }
    });
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

app.get('/api/login/:id', function (req, res) {

});

app.get('/:user_id', function (req, res) {
    res.send("Username: " + req.params.user_id);
});

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});