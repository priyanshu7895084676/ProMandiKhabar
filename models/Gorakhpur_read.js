const admin = require('../conn');

const firebase=admin.database();
const read_Gorakhpur = function(callback) {
firebase.ref('Gorakhpur/Gorakhpur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Chaurichaura= function(callback) {
  firebase.ref('Gorakhpur/Chaurichaura/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Sahjanwa = function(callback) {
firebase.ref('Gorakhpur/Sahjanwa/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Gorakhpur,
 read_Chaurichaura,
 read_Sahjanwa,

};
