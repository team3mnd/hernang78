const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itinerarySchema = new Schema({
    nameCity : String,
    countryCity: String,
    title : String,
    author : String,
    pictureId : String, 
    picturePath: String,
    rating : Number, 
    durationHour : Number,
    durationMinute : Number,  
    price : Number,
    hashtags : [],
    activities : [{
        title : String,
        picture : String
    }],
    comments: [],
    creationDate : Date
});

module.exports = mongoose.model('itinerary', itinerarySchema,'itinerary');