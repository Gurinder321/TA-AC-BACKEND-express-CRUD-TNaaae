const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // handle action
  res.render('users.ejs');
});

router.get('/new', (req, res) => {
  //  render the create form
  res.render('userForm.ejs');
});

router.post('/new', (req, res) => {
  res.send(req.body);
});

router.get('/:id', (req, res) => {
  // send single user details
  res.render('singleUser.ejs');
});

router.get('/:id/edit', (req, res) => {
  // edit form
});

router.put('/:id', (req, res) => {
  // capture the data from the update form
});

router.delete('/:id', (req, res) => {
  // delete the user
});

module.exports = router;
