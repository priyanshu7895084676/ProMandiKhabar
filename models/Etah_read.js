const admin = require('../conn');

const firebase=admin.database();
const read_Etah = function(callback) {
firebase.ref('Etah/Etah/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Aliganj= function(callback) {
  firebase.ref('Etah/Aliganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Avagarh = function(callback) {
firebase.ref('Etah/Avagarh/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Etah,
 read_Aliganj,
 read_Avagarh,

};
