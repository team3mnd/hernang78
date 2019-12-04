const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itinerarySchema = new Schema({
    idCity : String,
    title: String,
    author: String,
    pictureId: String,
    picturePath: String,
    rating: Number,
    duration: Number,
    price: String,
    hashtags: [],
    activities: [{
        title: String,
        adress: String,
        picture: String,
        time: Number,
        cost : String,
        comments : String
    }],
    comments: [{
        photo: String,
        comment: String,
        user: String,
        date: String
    }],
    creationDate: Date
});

module.exports = mongoose.model('itinerary', itinerarySchema, 'itinerary');