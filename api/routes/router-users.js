const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
  User.find()
    .then(doc => {
      res.status(200).json(doc)
    })
    .catch(err => {
      res.status(500).json({ error: err })
    })
});

router.post('/add',
  [
    check('mail').isEmail(),
    check('password').isLength({ min: 5 })
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    else {
      const user = new User({
        userName: req.body.userName,
        country: req.body.country,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        img: req.body.picture,
        mail: req.body.mail
      })

      user
        .save(function (err) {
          if (err) {
            res.send(err.message);
          }
          else {
            res.send('User added successfully')
          }
        });
    }
  });

module.exports = router;