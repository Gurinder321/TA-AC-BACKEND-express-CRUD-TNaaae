const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
  res.send('Book form');
});

router.post('/', (req, res) => {
  // grab the data
  // save the data to database
  // send a response
});
router.get('/', (req, res) => {
  // list all books
});

router.get('/:id', (req, res) => {
  // capture the book using id from database
  // send response wityh book detials data
});

router.get('/:id/edit', (req, res) => {
  // find the book
  // render an update form with book data
});

router.put('/:id', (req, res) => {
  // findByIdAndUpdate
});

router.delete('/:id', (req, res) => {
  // delete using id
});
module.exports = router;
