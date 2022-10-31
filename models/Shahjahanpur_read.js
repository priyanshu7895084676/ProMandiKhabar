const admin = require('../conn');

const firebase=admin.database();
const read_Shahjahanpur = function(callback) {
firebase.ref('Shahjahanpur/Shahjahanpur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const readk_Powayan= function(callback) {
  firebase.ref('Shahjahanpur/Powanyan/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Jalalabad = function(callback) {
firebase.ref('Shahjahanpur/Jalalabad/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_MeeranpurKatra = function(callback) {
  firebase.ref('Shahjahanpur/MeeranpurKatra/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Tilhar = function(callback) {
    firebase.ref('Shahjahanpur/Tilhar/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  };

module.exports = {
 read_Shahjahanpur,
 read_Jalalabad,
 readk_Powayan,
 read_MeeranpurKatra,
 read_Tilhar
};
