const admin = require('../conn');

const firebase=admin.database();
const read_Amroha = function(callback) {
firebase.ref('JyotibaphuleNagar/Amroha/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Dhanaura = function(callback) {
  firebase.ref('JyotibaphuleNagar/Dhanaura/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Hasanpur = function(callback) {
firebase.ref('JyotibaphuleNagar/Hasanpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Amroha,
  read_Hasanpur,
  read_Dhanaura
 
};
