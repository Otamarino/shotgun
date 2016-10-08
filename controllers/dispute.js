const Dispute = require('../models/dispute.js');

exports.list = (req, res) => {
  Dispute.find((err, docs) => {
    res.render('dispute', { dispute: docs });
  });
};


exports.dispute = (req, res) => {
  //
};
