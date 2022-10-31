const admin = require('../conn');

const firebase=admin.database();
const read_Mirzapur = function(callback) {
firebase.ref('Mirzapur/Mirzapur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Ahiraura= function(callback) {
  firebase.ref('Mirzapur/Ahiraura/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Mirzapur,
 read_Ahiraura
};
