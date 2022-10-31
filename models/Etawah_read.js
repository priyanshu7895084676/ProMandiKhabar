const admin = require('../conn');

const firebase=admin.database();
const read_Etawah = function(callback) {
firebase.ref('Etawah/Etawah/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Bharthana= function(callback) {
  firebase.ref('Etawah/Bharthana/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Jaswantnagar = function(callback) {
firebase.ref('Etawah/Jaswantnagar/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Etawah,
 read_Bharthana,
 read_Jaswantnagar,

};
