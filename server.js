const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database');
const cities = require('./api/routes/router-cities');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/cities', cities)

app.listen(5000, function () {
  console.log('listening on 5000');
});