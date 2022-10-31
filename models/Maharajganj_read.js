const admin = require('../conn');

const firebase=admin.database();

// read kamalganj data
const readk_Garaura= function(callback) {
  firebase.ref('Maharajganj/Garaura/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Anandnagar = function(callback) {
firebase.ref('Maharajganj/Anandnagar/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Nautanawa = function(callback) {
  firebase.ref('Maharajganj/Nautanawa/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Partawal = function(callback) {
    firebase.ref('Maharajganj/Partawal/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  };

module.exports = {
 
 read_Anandnagar,
 readk_Garaura,
 read_Nautanawa,
 read_Partawal
};
