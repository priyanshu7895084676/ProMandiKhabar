const admin = require('../conn');

const firebase=admin.database();
const read_Auraiya = function(callback) {
firebase.ref('Auraiya/Auraiya/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Achhalda= function(callback) {
  firebase.ref('Auraiya/Achhalda/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Dibiyapur = function(callback) {
firebase.ref('Auraiya/Dibiyapur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Auraiya,
 read_Achhalda,
 read_Dibiyapur,

};
