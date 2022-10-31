const admin = require('../conn');

const firebase=admin.database();
const readAchhnera = function(callback) {
firebase.ref('agra/achhnera/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const readkAgra = function(callback) {
  firebase.ref('agra/agra/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const readFatehpursikri = function(callback) {
firebase.ref('agra/fatehpursikri/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const readJagner = function(callback) {
  firebase.ref('agra/jagner/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const readJarar = function(callback) {
  firebase.ref('agra/jarar/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const readKhairagarh = function(callback) {
  firebase.ref('agra/khairagarh/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
});
};
const readShamshabad = function(callback) {
  firebase.ref('agra/shamshabad/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const readFatehabad = function(callback) {
  firebase.ref('agra/fatehabad/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};

module.exports = {
  readAchhnera,
  readkAgra,
  readFatehpursikri,
  readJagner,
  readJarar,
  readKhairagarh,
  readShamshabad,
  readFatehabad,
};
