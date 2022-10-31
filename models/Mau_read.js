const admin = require('../conn');

const firebase=admin.database();
const read_Dohright = function(callback) {
firebase.ref('Mau/Dohright/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Kopanganj= function(callback) {
  firebase.ref('Mau/Kopanganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Dohright,
 read_Kopanganj
};
