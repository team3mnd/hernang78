const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    password: { type: String, required: true },
    userName: {
        type: String,
        validate: {
            validator: function (v, cb) {
                User.find({ name: v }, function (err, docs) {
                    cb(docs.length == 0);
                });
            },
            message: 'User already exists!'
        }
    },
    mail: { type: String, required: true },
    country: String,
    picture: String
});

module.exports = mongoose.model('users', userSchema, 'users');