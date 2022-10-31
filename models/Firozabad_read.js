const admin = require('../conn');

const firebase=admin.database();
const read_Firozabad = function(callback) {
firebase.ref('Firozabad/Firozabad/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Sirsaganj= function(callback) {
  firebase.ref('Firozabad/Sirsaganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Shikohabad = function(callback) {
firebase.ref('Firozabad/Shikohabad/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Tundla = function(callback) {
  firebase.ref('Firozabad/Tundla/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Firozabad,
 read_Shikohabad,
 read_Sirsaganj,
 read_Tundla,
};
