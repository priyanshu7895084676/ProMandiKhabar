const admin = require('../conn');

const firebase=admin.database();
const read_SiddharthNagar = function(callback) {
firebase.ref('SiddharthNagar/SiddharthNagar/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const readk_Bansi= function(callback) {
  firebase.ref('SiddharthNagar/Bansi/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Naugarh = function(callback) {
firebase.ref('SiddharthNagar/Naugarh/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Sahiyapur = function(callback) {
  firebase.ref('SiddharthNagar/Sahiyapur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Shohratgarh = function(callback) {
    firebase.ref('SiddharthNagar/Shohratgarh/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  };

module.exports = {
 read_SiddharthNagar,
 read_Naugarh,
 readk_Bansi,
 read_Sahiyapur,
 read_Shohratgarh
};
