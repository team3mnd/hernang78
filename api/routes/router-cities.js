const express = require('express');
const router = express.Router();
const City = require('../models/city');

router.get('/', (req, res) => {
  City.find()
    .exec()
    .then(doc => {
      res.status(200).json(doc)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
});

router.post('/add', (req, res, next) => {
  const city = new City({
    name: req.body.name,
    country: req.body.country
  });

  city
    .save()
    .then(result => {
      res.send('City added successfully')
    })
    .catch(err => console.log(err))
});

module.exports = router;