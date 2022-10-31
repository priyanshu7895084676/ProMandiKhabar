const admin = require('../conn');

const firebase=admin.database();
const read_Jhinjhak = function(callback) {
firebase.ref('KanpurDehat/Jhinjhak/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Rura = function(callback) {
  firebase.ref('KanpurDehat/Rura/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Pukhrayan = function(callback) {
firebase.ref('KanpurDehat/Pukhrayan/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Jhinjhak,
  read_Pukhrayan,
  read_Rura
 
};
