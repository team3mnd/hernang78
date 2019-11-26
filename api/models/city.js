const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const citySchema = new Schema({
    name: String,
    country: String,
    url: String
});

module.exports = mongoose.model('cities', citySchema,'cities');