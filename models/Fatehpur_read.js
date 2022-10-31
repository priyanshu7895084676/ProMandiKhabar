const admin = require('../conn');

const firebase=admin.database();
const read_Fatehpur = function(callback) {
firebase.ref('Fatehpur/Fatehpur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const readk_Jahanabad= function(callback) {
  firebase.ref('Fatehpur/Jahanabad/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Bindki = function(callback) {
firebase.ref('Fatehpur/Bindki/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Khaga = function(callback) {
  firebase.ref('Fatehpur/Khaga/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Kishanpur = function(callback) {
    firebase.ref('Fatehpur/Kishanpur/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  };

module.exports = {
 read_Fatehpur,
 read_Bindki,
 readk_Jahanabad,
 read_Khaga,
 read_Kishanpur
};
