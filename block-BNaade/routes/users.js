const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  // fetch list of books from database
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render('users', { users: users });
  });
});

router.get('/new', (req, res) => {
  res.render('addUser');
});

router.post('/', (req, res, next) => {
  // capture data
  // console.log(req.body);
  // save it to the database
  User.create(req.body, (err, createdUser) => {
    // console.log(err, createdBook);
    if (err) return next(err);
    res.redirect('/users');
  });
  //   response
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  User.findById(id, (err, user) => {
    console.log(user);
    if (err) return next(err);
    res.render('userDetails.ejs', { user });
  });
});

router.get('/:id/edit', (req, res, next) => {
  // find the book details
  const id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('editUserForm', { user: user });
  });
  // render update form
});

router.post('/:id', (req, res) => {
  // capture the updated data from form
  const id = req.params.id;
  // using id find the book and update it with data coming from the form
  User.findByIdAndUpdate(id, req.body, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect('/users/' + id);
  });
});

module.exports = router;
