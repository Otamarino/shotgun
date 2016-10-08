const Car = require('../models/car.js');

exports.list = (req, res) => {
  Car.find((err, docs) => {
    res.render('car', { car: docs });
  });
};


exports.createCar = (req, res) => {
  //
};
