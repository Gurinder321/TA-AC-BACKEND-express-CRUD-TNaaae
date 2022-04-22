const express = require('express');
const path = require('path');
const usersRouter = require('./routes/users');

const app = express();

const PORT = 3000;

// middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

// routing middleware
app.use('/users', usersRouter);

// error handler middleware
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
