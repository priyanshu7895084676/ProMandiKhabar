const admin = require('../conn');

const firebase=admin.database();
const read_Jafarganj = function(callback) {
firebase.ref('Amethi/Jafarganj/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Jais= function(callback) {
  firebase.ref('Amethi/Jais/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Jafarganj,
 read_Jais
};
