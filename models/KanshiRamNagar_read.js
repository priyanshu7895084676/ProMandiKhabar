const admin = require('../conn');

const firebase=admin.database();
const read_Kasganj = function(callback) {
firebase.ref('KansiRamNagar/Kasganj/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_GanjDundwara= function(callback) {
  firebase.ref('KansiRamNagar/GanjDudwara/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_Kasganj,
 read_GanjDundwara
};
