const admin = require('../conn');

const firebase=admin.database();
const read_Dudhi = function(callback) {
firebase.ref('Sonbhadra/Dudhi/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Robertsganj= function(callback) {
  firebase.ref('Sonbhadra/Robertsganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Dudhi,
 read_Robertsganj
};
