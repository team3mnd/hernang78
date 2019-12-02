const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  password: {
    type: String,
    required: function() {
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
  useGoogle: {
    type : Boolean
  }
});

//encriptar password antes de guardar
userSchema.pre('save', function(next){
  bcrypt.genSalt(5).then(salts =>{
    bcrypt.hash(this.password, salts).then(hash =>{
      this.password = hash;
      next();
    }).catch(error => next(error));
  }).catch(error => next(error));
});

//method compare
userSchema.methods.comparePassword = function(password, next){
  bcrypt.compare(password, this.password, (error, sonIgualesBool) =>{
    if(error){
      return next(error);
    }
    else{
      next(null, sonIgualesBool);
    }
  })
}

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('users', userSchema, 'users');