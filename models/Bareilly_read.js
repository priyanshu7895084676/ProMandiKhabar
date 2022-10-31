const admin = require('../conn');

const firebase=admin.database();
const read_Bareilly = function(callback) {
firebase.ref('Bareilly/Bareilly/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Anwla= function(callback) {
  firebase.ref('Bareilly/Anwla/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Baheri = function(callback) {
firebase.ref('Bareilly/Baheri/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Bareilly,
 read_Anwla,
 read_Baheri,

};
