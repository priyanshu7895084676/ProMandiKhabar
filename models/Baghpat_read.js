const admin = require('../conn');

const firebase=admin.database();
const read_Baraut = function(callback) {
firebase.ref('Baghpat/Baraut/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Khekra= function(callback) {
  firebase.ref('Baghpat/Khekra/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Baraut,
 read_Khekra
};
