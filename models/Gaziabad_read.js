
const admin = require('../conn');

const firebase=admin.database();
const read_Gaziabad = function(callback) {
firebase.ref('Gaziabad/Gaziabad/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Hapur= function(callback) {
  firebase.ref('Gaziabad/Hapur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Muradnagar = function(callback) {
firebase.ref('Gaziabad/Muradnagar/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Gaziabad,
 read_Hapur,
 read_Muradnagar,

};
