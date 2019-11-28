const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User =require("./api/models/user");
const key = require("./nodemon.json");
const passport = require('passport');

const options ={}
//options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.jwtFromRequest = ExtractJwt.fromHeader("authorization");
options.secretOrKey = key.secretKey;

passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );

  module.exports = passport;