var mongoose = require("mongoose");
const Joi = require("@hapi/joi");

userschema = mongoose.Schema({
    username: String,
    email: String,
    password: String
});

var User = mongoose.model("User",userschema);

function validatesignup(data) {
    const schema = Joi.object({
        username: Joi.string().min(3).max(10).required(),
        email: Joi.string().email().min(3).max(20).required(),
        password: Joi.string().min(3).max(10).required(),
    });
    return schema.validate(data, {abortEarly: false});
}

function validatelogin(data) {
    const schema = Joi.object({
        username: Joi.string().min(3).max(10).required(),
        password: Joi.string().min(3).max(10).required(),
    });
    return schema.validate(data, {abortEarly: false});
}

module.exports.User = User;
module.exports.validatelogin = validatelogin;
module.exports.validatesignup = validatesignup;

