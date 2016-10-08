const mongoose = require('mongoose');

const disputeSchema = new mongoose.Schema({
  shotgun: String,
  disputer: String
});

const Dispute = mongoose.model('Dispute', disputeSchema);
module.exports = Dispute;
