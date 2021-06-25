var mongoose = require("mongoose");

filmschema = mongoose.Schema({
    name: String,
    type: String,
    director: String,
    cast: Array, 
    image: String,
    score: Number,
    total: Number
});

var Film = mongoose.model("Film",filmschema);

module.exports.Film = Film;


