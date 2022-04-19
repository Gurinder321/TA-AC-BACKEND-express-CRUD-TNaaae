const express = require('express');
const path = require('path');

const app = express();

// Middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(3000, () => {
  console.log(`Server running on PORT 3000`);
});
