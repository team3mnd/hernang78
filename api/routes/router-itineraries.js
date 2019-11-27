const express = require('express');
const router = express.Router();
const Itinerary = require('../models/itinerary');

router.get('/', (req, res) => {
  Itinerary.find()
    .then(doc => {
      res.status(200).json(doc)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
});

router.get('/:country/:city',(req,res)=>{
  let nameCity = req.params.city;
  let nameCountry = req.params.country;
    Itinerary.find({nameCity: nameCity, countryCity:nameCountry})
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      res.send(err.message)
    })
});

router.post('/add', (req, res, next) => {
  const itinerary = new Itinerary({
    name: req.body.name,
    country: req.body.country
  });

  itinerary
    .save()
    .then(result => {
      res.send('Itinerary added successfully')
    })
    .catch(err => console.log(err))
});

module.exports = router;