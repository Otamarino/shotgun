const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  user: String,
  plate: String
});

const Car = mongoose.model('Car', carSchema);
module.exports = Car;
