
const admin = require('../conn');

const firebase=admin.database();
const read_Hathras = function(callback) {
firebase.ref('Hathras/Hathras/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Sadabad= function(callback) {
  firebase.ref('Hathras/Sadabad/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_SikandraRao = function(callback) {
firebase.ref('Hathras/SikandraRao/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Hathras,
 read_Sadabad,
 read_SikandraRao,

};
