const admin = require('../conn');

const firebase=admin.database();
const read_Jaunpur = function(callback) {
firebase.ref('Jaunpur/Jaunpur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Mungrabadshahpur= function(callback) {
  firebase.ref('Jaunpur/Mungrabadshahpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Shahganj = function(callback) {
firebase.ref('Jaunpur/Shahganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Jaunpur,
 read_Mungrabadshahpur,
 read_Shahganj,

};
