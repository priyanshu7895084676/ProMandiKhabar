const admin = require('../conn');

const firebase=admin.database();
const read_Badayun = function(callback) {
firebase.ref('Badayun/Badayun/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Bilsi = function(callback) {
  firebase.ref('Badayun/Bilsi/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Bisauli = function(callback) {
firebase.ref('Badayun/Bisauli/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Dataganj = function(callback) {
  firebase.ref('Badayun/Dataganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_IslamNagar = function(callback) {
  firebase.ref('Badayun/IslamNagar/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Sahaswan = function(callback) {
  firebase.ref('Badayun/Sahaswan/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
});
};
const read_Ujhani = function(callback) {
  firebase.ref('Badayun/Ujhani/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Wazirganj = function(callback) {
  firebase.ref('Badayun/Wazirganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};

module.exports = {
  read_Badayun,
  read_Bilsi,
  read_Bisauli,
  read_Dataganj,
  read_IslamNagar,
  read_Sahaswan,
  read_Ujhani,
  read_Wazirganj,
};
