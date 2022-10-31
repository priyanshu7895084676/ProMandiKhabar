const admin = require('../conn');

const firebase=admin.database();
const read_Gonda = function(callback) {
firebase.ref('Gonda/Gonda/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Nawabganj= function(callback) {
  firebase.ref('Gonda/Nawabganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Gonda,
 read_Nawabganj
};
