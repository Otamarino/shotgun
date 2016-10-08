const Shotgun = require('../models/shotgun.js');

exports.list = (req, res) => {
  Shotgun.find((err, docs) => {
    res.json({ shotguns: docs});
  });
};


exports.callIt = (req, res) => {
  var shotgun = new Shotgun({user:req.body.user,car:req.body.car});
  shotgun.save(function(err) {
           if (err)
               res.send(err);

           res.json({ message: 'Shotgun created!' });
       });
};
