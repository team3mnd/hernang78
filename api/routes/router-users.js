const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Itinerary = require('../models/itinerary')
const { check, validationResult } = require('express-validator');
const key = require("../../nodemon.json");
const jwt = require("jsonwebtoken");
const passport = require('../../passport');
const bcrypt = require('bcryptjs');

router.get('/', /* passport.authenticate("jwt", { session: false }), */
  (req, res) => {

    User.find()
      .then(doc => {
        res.status(200).json(doc)
      })
      .catch(err => {
        res.status(500).json({ error: err })
      })
  });

router.post('/add',
  [check('mail').isEmail(),
  check('password').isLength({ min: 5 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!(errors.isEmpty())) {
      return res.status(422).json({ expressErrors: errors });
    }
    else {
      const user = new User({
        userName: req.body.userName,
        country: req.body.country,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        picture: req.body.picture,
        mail: req.body.mail
      })
      user
        .save(function (err) {
          if (err) {
            return res.status(400).json({ databaseErrors: err });
          }
          else {
            res.json('User added successfully')
          }
        });
    }
  });

router.post('/login',
  async function (req, res) {
    const email = req.body.email
    const password = req.body.password
    const userWithEmail = await findUserByEmail(email)

    if (userWithEmail) {
      if (bcrypt.compareSync(password, userWithEmail.password)) {
        const payload = {
          id: userWithEmail._id,
          username: userWithEmail.userName,
          picture: userWithEmail.picture
        };
        const options = { expiresIn: 2592000 };
        jwt.sign(
          payload,
          key.secretKey,
          options,
          (err, token) => {
            if (err) {
              res.json({
                success: false,
                token: "There was an error",
                errors: ''
              });
            } else {
              res.json({
                success: true,
                token: token,
                errors: ''
              });
            }
          }
        );
      }
      else {
        res.status(404).json({
          success: false,
          token: '',
          errors: 'Wrong email or password'
        });
      }
    }
    else {
      res.status(404).json({
        success: false,
        token: '',
        errors: 'Wrong email or password'
      });
    }
  });


async function findUserByEmail(email) {
  try {
    return User.findOne({ 'mail': email.toLowerCase() })
  } catch (error) {
    throw new Error(`Unable to connect to the database.`)
  }
}

router.get('/favourite/:userId',
  async (req, res) => {
    let userId = req.params.userId;

    const userWithId = await findUserById(userId);

    if (userWithId) {
      const userFavs = userWithId.favourites;
      res.json(userWithId.favourites);
    }
  });

router.post('/favourite',
  async (req, res) => {
    let userId = req.body.userId;
    let itineraryId = req.body.itineraryId;

    let itineraryPresent = false;
    const userWithId = await findUserById(userId);

    if (userWithId) {
      const userFavs = userWithId.favourites;

      if (userFavs.some(fav => fav._id.equals(itineraryId))) {
        itineraryPresent = true;
      }

      if (itineraryPresent) {
        const userFavsFiltered = userFavs.filter(fav => !(fav._id.equals(itineraryId)))
        User.findOneAndUpdate(
          { '_id': userId },
          { favourites: userFavsFiltered },
          { upsert: true },
          function (err) {

            if (err) return res.send(500, { error: err });
            User.findOne({ '_id': userId })
              .then(usuario => res.json(usuario.favourites))
          })
      }
      else {
        userFavs.push(itineraryId)

        User.findOneAndUpdate(
          { '_id': userId },
          { favourites: userFavs },
          { upsert: true },
          function (err) {
            if (err) return res.send(500, { error: err });
            User.findOne({ '_id': userId })
              .then(usuario => res.json(usuario.favourites))
          })
      }
    }
  });

async function findUserById(id) {
  try {
    return User.findOne({ '_id': id })
  } catch (error) {
    throw new Error(`Unable to connect to the database.`)
  }
}

/*async function findItineraryById(id) {
  try {
    return User.findOne({ '_id': id })
  } catch (error) {
    throw new Error(`Unable to connect to the database.`)
  }
} */

module.exports = router;