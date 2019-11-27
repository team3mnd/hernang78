const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  User.find()
    .then(doc => {
      res.status(200).json(doc)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
});

router.post('/add', (req, res, next) => {
  const user = new User({
    userName: req.body.userName,
    country: req.body.country,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    img: req.body.picture,
    mail: req.body.mail
  });
  /* console.log(user); */

  user
    .save(function (err) {
      if (err) {
        res.send(err.message);
        /* console.log(err); */
      }
      else {
        res.send('User added successfully')
      }
    });
})

module.exports = router;