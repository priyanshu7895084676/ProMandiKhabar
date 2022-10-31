const admin = require('../conn');

const firebase=admin.database();
const read_Meerut = function(callback) {
firebase.ref('Meerut/Meerut/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Parikshitgarh= function(callback) {
  firebase.ref('Meerut/Parikshitgarh/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Mawana = function(callback) {
firebase.ref('Meerut/Mawana/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Sardhana = function(callback) {
  firebase.ref('Meerut/Sardhana/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Meerut,
 read_Mawana,
 read_Parikshitgarh,
 read_Sardhana,
};
