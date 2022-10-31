const admin = require('../conn');

const firebase=admin.database();
const read_Lucknow = function(callback) {
firebase.ref('Lucknow/Lucknow/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Banthra= function(callback) {
  firebase.ref('Lucknow/Banthra/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Lucknow,
 read_Banthra
};
