const admin = require('../conn');

const firebase=admin.database();
const read_Karwi = function(callback) {
firebase.ref('Chitrakoot/Karwi/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Mau= function(callback) {
  firebase.ref('Chitrakoot/Mau/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Karwi,
 read_Mau
};
