const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const sports = ['Boxing', 'Soccer', 'Basketball'];
  res.render('index', { sports: sports });
});

router.get('/about', (req, res) => {
  res.render('about');
});

module.exports = router;
