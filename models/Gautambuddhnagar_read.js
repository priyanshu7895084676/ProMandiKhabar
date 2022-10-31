const admin = require('../conn');

const firebase=admin.database();

// read kamalganj data
const readk_Dankaur= function(callback) {
  firebase.ref('GautambuddhNagar/Dankaur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Dadri = function(callback) {
firebase.ref('GautambuddhNagar/Dadri/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Jewar = function(callback) {
  firebase.ref('GautambuddhNagar/Jewar/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Noida = function(callback) {
    firebase.ref('GautambuddhNagar/Noida/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  };

module.exports = {
 
 read_Dadri,
 readk_Dankaur,
 read_Jewar,
 read_Noida
};
