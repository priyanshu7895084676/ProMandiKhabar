const admin = require('../conn');

const firebase=admin.database();
const read_Mathura = function(callback) {
firebase.ref('Mathura/Mathura/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Kosikalan= function(callback) {
  firebase.ref('Mathura/Kosikalan/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Mathura,
 read_Kosikalan
};
