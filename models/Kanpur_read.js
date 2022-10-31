const admin = require('../conn');

const firebase=admin.database();
const read_Kanpur = function(callback) {
firebase.ref('Kanpur/Kanpur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const readk_Chaubepur= function(callback) {
  firebase.ref('Kanpur/Chaubepur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Baripal = function(callback) {
firebase.ref('Kanpur/Baripal/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Uttaripura = function(callback) {
  firebase.ref('Kanpur/Uttaripura/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Kanpur,
 read_Baripal,
 readk_Chaubepur,
 read_Uttaripura,
};
