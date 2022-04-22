// requires
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const PORT = 3000;

// connect to db
mongoose.connect(
  'mongodb://localhost/bookstore',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log('Connected', err ? false : true);
  }
);

// instantiating express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  res.locals.message = 'Hello, World!';
  next();
});

// routing middlewares
app.use('/', indexRouter);
app.use('/users', usersRouter);

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// error handler middleware
// 404
app.use((req, res, next) => {
  res.send('Page not found');
});

app.use((err, req, res, next) => {
  res.send(err);
});

// listener
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
