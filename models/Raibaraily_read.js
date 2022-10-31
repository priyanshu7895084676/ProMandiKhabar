const admin = require('../conn');

const firebase=admin.database();
const read_Raibaraily = function(callback) {
firebase.ref('Raibaraily/Raibaraily/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Bachhrawan= function(callback) {
  firebase.ref('Raibaraily/Bachhrawan/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Lalganj = function(callback) {
firebase.ref('Raibaraily/Lalganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Salon = function(callback) {
  firebase.ref('Raibaraily/Salon/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Raibaraily,
 read_Lalganj,
 read_Bachhrawan,
 read_Salon,
};
