
const admin = require('../conn');

const firebase=admin.database();
const read_Jangipur = function(callback) {
firebase.ref('Gazipur/Jangipur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Jamania= function(callback) {
  firebase.ref('Gazipur/Jamania/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Saidpur = function(callback) {
firebase.ref('Gazipur/Saidpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};

const read_Yusufpur = function(callback) {
    firebase.ref('Gazipur/Yusufpur/')
      .once('value').then(function(snapshot) {
        callback(snapshot.val());
      });
    };


module.exports = {
 read_Saidpur,
 read_Jamania,
 read_Jangipur,
 read_Yusufpur

};
