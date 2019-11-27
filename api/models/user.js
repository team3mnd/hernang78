const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    password: { type: String, required: true },
    userName: {type: String, required: true},
    mail: { type: String, required: true },
    country: String,
    picture: String
});

module.exports = mongoose.model('users', userSchema, 'users');