
const admin = require('../conn');

const firebase=admin.database();
const read_Mahoba = function(callback) {
firebase.ref('Mahoba/Mahoba/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Chakhari= function(callback) {
  firebase.ref('Mahoba/Chakhari/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Panwari = function(callback) {
firebase.ref('Mahoba/Panwari/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Mahoba,
 read_Chakhari,
 read_Panwari,

};
