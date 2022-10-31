const admin = require('../conn');

const firebase=admin.database();
const read_Moradabad = function(callback) {
firebase.ref('Moradabad/Moradabad/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Chandausi= function(callback) {
  firebase.ref('Moradabad/Chandausi/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Bahjoi = function(callback) {
firebase.ref('Moradabad/Bahjoi/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Sambhal = function(callback) {
  firebase.ref('Moradabad/Sambhal/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Moradabad,
 read_Bahjoi,
 read_Chandausi,
 read_Sambhal,
};
