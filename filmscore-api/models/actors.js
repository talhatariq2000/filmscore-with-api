var mongoose = require("mongoose");

actorschema = mongoose.Schema({
    name: String,
    type: String,
});

var Actor = mongoose.model("Actor",actorschema);

module.exports.Actor = Actor;
