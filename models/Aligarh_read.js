const admin = require('../conn');

const firebase=admin.database();
const read_Aligarh = function(callback) {
firebase.ref('aligarh/aligarh/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const readk_Atrauli= function(callback) {
  firebase.ref('aligarh/atrauli/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Chharra = function(callback) {
firebase.ref('aligarh/chharra/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_khair = function(callback) {
  firebase.ref('aligarh/khair/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Aligarh,
 read_Chharra,
 readk_Atrauli,
 read_khair,
};
