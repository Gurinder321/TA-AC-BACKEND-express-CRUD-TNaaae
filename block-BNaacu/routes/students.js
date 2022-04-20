const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
  res.send('Students form');
});

router.post('/', (req, res) => {
  // grab the data
  // save the data to database
  // send a response
});

router.get('/', (req, res) => {
  const sports = ['ankit', 'suraj', 'prashant', 'ravi'];
  res.render('students', { sports: sports });
});

router.get('/:id', (req, res) => {
  res.render('studentDetail', {
    student: { name: 'rahul', email: 'rahul@altcampus.io' },
  });
});

module.exports = router;
