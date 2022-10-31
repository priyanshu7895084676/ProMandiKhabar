const admin = require('../conn');

const firebase=admin.database();
const read_Bharauasumerpur = function(callback) {
firebase.ref('Hamirpur/Bharuasumerpur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const readk_Maudaha= function(callback) {
  firebase.ref('Hamirpur/Maudaha/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Kurara = function(callback) {
firebase.ref('Hamirpur/Kurara/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Muskura = function(callback) {
  firebase.ref('Hamirpur/Muskura/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Rath = function(callback) {
    firebase.ref('Hamirpur/Rath/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  };

module.exports = {
 read_Bharauasumerpur,
 read_Kurara,
 readk_Maudaha,
 read_Muskura,
 read_Rath
};
