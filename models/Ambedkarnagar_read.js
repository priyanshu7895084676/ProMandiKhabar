const admin = require('../conn');

const firebase=admin.database();
const read_AmbedkarNagar = function(callback) {
firebase.ref('AmbedkarNagar/AmbedkarNagar/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_TandaAkharpur= function(callback) {
  firebase.ref('AmbedkarNagar/TandaAkharpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};



module.exports = {
 read_AmbedkarNagar,
 read_TandaAkharpur
};
