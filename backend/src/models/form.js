var mongoose = require("mongoose");

var form = mongoose.model('form', {
    id : String,
    name : String
});

module.exports = form;