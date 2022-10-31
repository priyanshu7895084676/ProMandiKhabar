const admin = require('../conn');

const firebase=admin.database();
const read_Muzaffarnagar = function(callback) {
firebase.ref('Muzaffarnagar/Muzaffarnagar/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Kairana = function(callback) {
  firebase.ref('Muzaffarnagar/Kairana/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Kandhla = function(callback) {
firebase.ref('Muzaffarnagar/Kandhla/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Khatauli = function(callback) {
  firebase.ref('Muzaffarnagar/Khatauli/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Shahpur = function(callback) {
  firebase.ref('Muzaffarnagar/Shahpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Shamli = function(callback) {
  firebase.ref('Muzaffarnagar/Shamli/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
});
};
const read_Thanabhawan = function(callback) {
  firebase.ref('Muzaffarnagar/Thanabhawan/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
  read_Muzaffarnagar,
  read_Kairana,
  read_Kandhla,
  read_Khatauli,
  read_Shahpur,
  read_Shamli,
  read_Thanabhawan,
 
};
