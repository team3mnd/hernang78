const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database');
const cities = require('./api/routes/router-cities');
const itineraries = require('./api/routes/router-itineraries');
const users = require('./api/routes/router-users');
const comments = require('./api/routes/router-comments.js');
const passport = require('./passport');
//passport middleware
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/cities', cities);
app.use('/itineraries', itineraries);
app.use('/users',users);
app.use('/comments',comments);
app.use(express.static('images'));;

app.listen(5000, function () {
  console.log('listening on 5000');
});