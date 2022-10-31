const admin = require('../conn');

const firebase=admin.database();
const read_Rampur = function(callback) {
firebase.ref('Rampur/Rampur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const readk_Shahabadrampur= function(callback) {
  firebase.ref('Rampur/Shahabadrampur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Bilaspur = function(callback) {
firebase.ref('Rampur/Bilaspur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Tandarampur = function(callback) {
  firebase.ref('Rampur/Tandarampur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Milak = function(callback) {
    firebase.ref('Rampur/Milak/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  };

module.exports = {
 read_Rampur,
 read_Bilaspur,
 readk_Shahabadrampur,
 read_Tandarampur,
 read_Milak
};
