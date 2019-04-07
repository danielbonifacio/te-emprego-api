const mongoose = require('mongoose');

const { Schema } = mongoose;

const TestSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model('test', TestSchema);
