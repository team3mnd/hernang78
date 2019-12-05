const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  password: {
    type: String,
    required: function () {
      return !this.useGoogle;
    }
  },
  userName: {
    type: String,
    unique: true
  },
  mail: {
    type: String,
    unique: true,
    required: true
  },
  country: String,
  picture: String,
  favourites: [
    {
      itineraryId: String
    }
  ],
  useGoogle: {
    type: Boolean
  }
});

//encriptar password antes de guardar
userSchema.pre('save', function(next){
  bcrypt.genSalt(10).then(salts =>{
    bcrypt.hash(this.password, salts).then(hash =>{
      this.password = hash;
      next();
    }).catch(error => next(error));
  }).catch(error => next(error));
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('users', userSchema, 'users');