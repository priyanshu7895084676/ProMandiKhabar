const admin = require('../conn');

const firebase=admin.database();
const read_Jhasi = function(callback) {
firebase.ref('Jhasi/Jhasi/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Baruasagar = function(callback) {
  firebase.ref('Jhasi/Baruasagar/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Chirgaon = function(callback) {
firebase.ref('Jhasi/Chirgaon/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Gursarai = function(callback) {
  firebase.ref('Jhasi/Gursarai/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Mauranipur = function(callback) {
  firebase.ref('Jhasi/Mauranipur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Moth = function(callback) {
  firebase.ref('Jhasi/Moth/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
});
};
const read_Urai = function(callback) {
  firebase.ref('Jhasi/Urai/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Wazirganj = function(callback) {
  firebase.ref('Jhasi/Wazirganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};

module.exports = {
  read_Jhasi,
  read_Baruasagar,
  read_Chirgaon,
  read_Gursarai,
  read_Mauranipur,
  read_Moth,
 
};
