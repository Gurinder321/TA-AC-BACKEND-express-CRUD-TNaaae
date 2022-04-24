const express = require('express');
const router = express.Router();
const Book = require('../models/book');

router.get('/', (req, res) => {
  // fetch list of books from database
  Book.find({}, (err, books) => {
    if (err) return next(err);
    res.render('books', { books: books });
  });
});

router.get('/new', (req, res) => {
  res.render('addBook');
});

router.post('/', (req, res, next) => {
  // capture data
  // console.log(req.body);
  // save it to the database
  Book.create(req.body, (err, createdBook) => {
    // console.log(err, createdBook);
    if (err) return next(err);
    res.redirect('/books');
  });
  //   response
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Book.findById(id, (err, book) => {
    console.log(book);
    if (err) return next(err);
    res.render('bookDetails', { book: book });
  });
});

module.exports = router;
