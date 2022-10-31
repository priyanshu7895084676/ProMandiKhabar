const admin = require('../conn');

const firebase=admin.database();
const read_Banda = function(callback) {
firebase.ref('Banda/Banda/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Atarra= function(callback) {
  firebase.ref('Banda/Atarra/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Baberu = function(callback) {
firebase.ref('Banda/Baberu/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Banda,
 read_Atarra,
 read_Baberu,

};
