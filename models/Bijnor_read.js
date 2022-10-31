const admin = require('../conn');

const firebase=admin.database();
const read_Bijnor = function(callback) {
firebase.ref('Bijnor/Bijnor/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Chandpur = function(callback) {
  firebase.ref('Bijnor/Chandpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Dhampur = function(callback) {
firebase.ref('Bijnor/Dhampur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Haldaur = function(callback) {
  firebase.ref('Bijnor/Haldaur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Kiratpur = function(callback) {
  firebase.ref('Bijnor/Kiratpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Nagina = function(callback) {
  firebase.ref('Bijnor/Nagina/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
});
};
const read_Najibabad = function(callback) {
  firebase.ref('Bijnor/Najibabad/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
  read_Bijnor,
  read_Chandpur,
  read_Dhampur,
  read_Haldaur,
  read_Kiratpur,
  read_Nagina,
  read_Najibabad,
 
};
