const admin = require('../conn');

const firebase=admin.database();
const read_Baliya = function(callback) {
firebase.ref('Baliya/Baliya/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_BiltharaRoad= function(callback) {
  firebase.ref('Baliya/BiltharaRoad/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Chitbaragaon = function(callback) {
firebase.ref('Baliya/Chitbaragaon/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Rasra = function(callback) {
  firebase.ref('Baliya/Rasra/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Baliya,
 read_Chitbaragaon,
 read_BiltharaRoad,
 read_Rasra,
};
