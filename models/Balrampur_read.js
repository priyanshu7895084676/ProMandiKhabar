const admin = require('../conn');

const firebase=admin.database();
const read_Balrampur = function(callback) {
firebase.ref('Balrampur/Balrampur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Tulsipur= function(callback) {
  firebase.ref('Balrampur/Tulsipur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Pachperwa = function(callback) {
firebase.ref('Balrampur/Pachperwa/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Utraula = function(callback) {
  firebase.ref('Balrampur/Utraula/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Balrampur,
 read_Pachperwa,
 read_Tulsipur,
 read_Utraula,
};
