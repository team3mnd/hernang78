const express = require('express');
const router = express.Router();
const City = require('../models/city');

router.get('/', (req, res) => {
  City.find()
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
  console.log(typeof nameCity,nameCity)
    City
    .find({name: nameCity,country: nameCountry})
    .then((result)=>{
      console.log(result)
      res.send(result)
    })
    .catch((err)=>{
      res.send(err.message)
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