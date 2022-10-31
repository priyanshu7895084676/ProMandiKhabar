const admin = require('../conn');

const firebase=admin.database();
const read_Ayodhya = function(callback) {
firebase.ref('Ayodhya/Ayodhya/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Rudauli= function(callback) {
  firebase.ref('Ayodhya/Rudauli/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Ayodhya,
 read_Rudauli
};
