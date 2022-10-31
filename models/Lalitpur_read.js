const admin = require('../conn');

const firebase=admin.database();
const read_Lalitpur = function(callback) {
firebase.ref('Lalitpur/Lalitpur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Mahroni= function(callback) {
  firebase.ref('Lalitpur/Mahroni/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Lalitpur,
 read_Mahroni
};
