const admin = require('../conn');

const firebase=admin.database();
const read_Saharanpur = function(callback) {
firebase.ref('Saharanpur/Saharanpur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Chhutmalpur = function(callback) {
  firebase.ref('Saharanpur/Chhutmalpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Deoband = function(callback) {
firebase.ref('Saharanpur/Deoband/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Gangoh = function(callback) {
  firebase.ref('Saharanpur/Gangoh/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Nakur = function(callback) {
  firebase.ref('Saharanpur/Nakur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Nanota = function(callback) {
  firebase.ref('Saharanpur/Nanota/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
});
};
const read_Rampurmaniharan = function(callback) {
  firebase.ref('Saharanpur/Rampurmaniharan/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Sulatanpurchilana = function(callback) {
  firebase.ref('Saharanpur/Sulatanpurchilana/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};

module.exports = {
  read_Saharanpur,
  read_Chhutmalpur,
  read_Deoband,
  read_Gangoh,
  read_Nakur,
  read_Nanota,
  read_Rampurmaniharan,
  read_Sulatanpurchilana,
};
