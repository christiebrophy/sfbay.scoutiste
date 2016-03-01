var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: String,
  likes: Number,
  city: String,
  category: String
});

module.exports = mongoose.model('Item', ItemSchema);