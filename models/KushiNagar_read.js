const admin = require('../conn');

const firebase=admin.database();
const read_KushiNagar = function(callback) {
firebase.ref('KushiNagar/KushiNagar/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};




module.exports = {
 read_KushiNagar,
 
};
