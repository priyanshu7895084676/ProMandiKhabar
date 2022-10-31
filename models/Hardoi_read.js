const admin = require('../conn');

const firebase=admin.database();
const read_Hardoi = function(callback) {
firebase.ref('Hardoi/Hardoi/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const readk_Sandi= function(callback) {
  firebase.ref('Hardoi/Sandi/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Madhoganj = function(callback) {
firebase.ref('Hardoi/Madhoganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Sandila = function(callback) {
  firebase.ref('Hardoi/Sandila/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Shahabadhardoi = function(callback) {
    firebase.ref('Hardoi/Shahabadhardoi/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  };

module.exports = {
 read_Hardoi,
 read_Madhoganj,
 readk_Sandi,
 read_Sandila,
 read_Shahabadhardoi
};
