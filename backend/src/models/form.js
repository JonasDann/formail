var mongoose = require("mongoose");

var form = mongoose.model('form', {
    id : String,
    name : String,
    description : String,
    emails : [String],
    template : String,
    active: Boolean
});

module.exports = form;