const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    title: String,
    description: String,
    amount: Number,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
