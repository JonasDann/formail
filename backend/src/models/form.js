var mongoose = require("mongoose");

var form = mongoose.model('form', {
    id : String,
    name : String,
    description : String,
    email : String,
    template : String
});

module.exports = form;