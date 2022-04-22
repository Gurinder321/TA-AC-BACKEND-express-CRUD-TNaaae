const express = require('express');
const router = express.Router();
const Book = require('../models/user');

router.get('/', (req, res) => {
  res.render('users');
});

router.get('/new', (req, res) => {
  res.render('addUser');
});

router.post('/', (req, res) => {
  // capture data
  //   console.log(req.body);
  // save it to the database
  User.create(req.body, (err, createdUser) => {
    // console.log(err, createdBook);
    if (err) return next(err);
    res.redirect('/user');
  });
  //   response
});

module.exports = router;
