const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const citySchema = new Schema({
    /* _id: mongoose.Schema.Types.ObjectId, */
    name: String,
    country: String
});

module.exports = mongoose.model('cities', citySchema);