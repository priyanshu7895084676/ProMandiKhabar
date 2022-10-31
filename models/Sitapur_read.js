const admin = require('../conn');

const firebase=admin.database();
const read_Sitapur = function(callback) {
firebase.ref('Sitapur/Sitapur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Biswan = function(callback) {
  firebase.ref('Sitapur/Biswan/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Hargaon = function(callback) {
firebase.ref('Sitapur/Hargaon/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Mahmudabad = function(callback) {
  firebase.ref('Sitapur/Mahmudabad/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Maholi = function(callback) {
  firebase.ref('Sitapur/Maholi/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Mishrit = function(callback) {
  firebase.ref('Sitapur/Mishrit/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
});
};
const read_Sidhauli = function(callback) {
  firebase.ref('Sitapur/Sidhauli/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
  read_Sitapur,
  read_Biswan,
  read_Hargaon,
  read_Mahmudabad,
  read_Maholi,
  read_Mishrit,
  read_Sidhauli,
 
};
