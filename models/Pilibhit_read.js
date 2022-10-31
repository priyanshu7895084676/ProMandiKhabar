
const admin = require('../conn');

const firebase=admin.database();
const read_Pilibhit = function(callback) {
firebase.ref('Pilibhit/Pilibhit/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Puranpur= function(callback) {
  firebase.ref('Pilibhit/Puranpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Bisalpur = function(callback) {
firebase.ref('Pilibhit/Bisalpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Pilibhit,
 read_Puranpur,
 read_Bisalpur,

};
