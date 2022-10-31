
const admin = require('../conn');

const firebase=admin.database();
const read_Unnao = function(callback) {
firebase.ref('Unnao/Unnao/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Bangamau= function(callback) {
  firebase.ref('Unnao/Bangamau/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Purwa = function(callback) {
firebase.ref('Unnao/Purwa/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Unnao,
 read_Bangamau,
 read_Purwa,

};
