const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000;
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');
const studentsRouter = require('./routes/students');

mongoose.connect('mongodb://localhost/samples');

// mongoose.connect(
//   'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.3.1'
// );

// middleware
app.use(express.json());
app.use((req, res, next) => {
  res.locals.message = 'Hello, World!';
  next();
});

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routing middlewares
app.use('/', indexRouter);
app.use('/books', booksRouter);
app.use('/students', studentsRouter);

// error handler middleware
app.use((req, res, next) => {
  res.send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
