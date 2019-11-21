const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itinerarySchema = new Schema({
    title : String,
    author : String,
    pictureId : String, 
    picturePath: String,
    rating : Number, 
    durationHour : Number,
    durationMinute : Number,  
    price : Number,
    hashtags : [],
    nameCity : String,
    countryCity: String
    
});

module.exports = mongoose.model('itinerary', itinerarySchema);