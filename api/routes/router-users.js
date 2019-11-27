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

async function findUserByUsername (username) {
  try {
      return User.findOne({'userName': username})
  } catch (error) {
      throw new Error(`Unable to connect to the database.`)
  }
}

router.post('/add', (req, res) => {
  const user = new User({
    userName: req.body.userName,
    country: req.body.country,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    img: req.body.picture,
    mail: req.body.mail
  });
  const userWithUsername = findUserByUsername(user.userName)
    if (userWithUsername) {
        return res.send({message: 'Username is already taken.'})
    }
    else{
      user.save(res.send('User added successfully'))
    }
})



module.exports = router;