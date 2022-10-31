const admin = require('../conn');

const firebase=admin.database();
const read_Prayagraj = function(callback) {
firebase.ref('Prayagraj/Prayagraj/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Leriyari= function(callback) {
  firebase.ref('Prayagraj/Leriyari/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Jasra = function(callback) {
firebase.ref('Prayagraj/Jasra/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Sirsa = function(callback) {
  firebase.ref('Prayagraj/Sirsa/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Prayagraj,
 read_Jasra,
 read_Leriyari,
 read_Sirsa,
};
