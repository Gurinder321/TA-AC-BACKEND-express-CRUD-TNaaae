const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    sports: String,
    age: Number,
  },
  { timestamps: true }
);

const Book = mongoose.model('User', userSchema);

module.exports = Book;
