const admin = require('../conn');

const firebase=admin.database();
const read_Bahraich = function(callback) {
firebase.ref('Bahraich/Bahraich/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const readk_Mihipurwa= function(callback) {
  firebase.ref('Bahraich/Mihipurwa/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Nanpara = function(callback) {
firebase.ref('Bahraich/Nanpara/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Risia = function(callback) {
  firebase.ref('Bahraich/Risia/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Rupaidiha = function(callback) {
    firebase.ref('Bahraich/Rupaidiha/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  };

module.exports = {
 read_Bahraich,
 read_Nanpara,
 readk_Mihipurwa,
 read_Risia,
 read_Rupaidiha
};
