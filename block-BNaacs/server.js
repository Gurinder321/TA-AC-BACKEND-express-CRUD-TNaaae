const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();
const path = require('path');

mongoose.connect('mongodb://localhost/samples');

// Middleware
app.use(express.json());
// Setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.send('school');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
