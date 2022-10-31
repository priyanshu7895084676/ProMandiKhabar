const admin = require('../conn');

const firebase=admin.database();
const read_Barabanki = function(callback) {
firebase.ref('Barabanki/Barabanki/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Safdarganj= function(callback) {
  firebase.ref('Barabanki/Safdarganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Barabanki,
 read_Safdarganj
};
