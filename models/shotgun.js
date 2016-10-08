const mongoose = require('mongoose');

const shotgunSchema = new mongoose.Schema({
  user: String,
  car: String
});

const Shotgun = mongoose.model('Shotgun', shotgunSchema);
module.exports = Shotgun;
