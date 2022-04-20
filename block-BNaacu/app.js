const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();
const path = require('path');
const studentsRouter = require('./routes/students');

mongoose.connect('mongodb://localhost/samples');

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

// routing middlewares
// app.use('/', indexRouter);
// app.use('/books', booksRouter);
// app.use('/students', studentsRouter);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.use('/students', studentsRouter);

// error handler middleware
app.use((req, res, next) => {
  res.status(404);
  res.send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
