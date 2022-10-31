const admin = require('../conn');

const firebase=admin.database();
const read_SantKabirNagar = function(callback) {
firebase.ref('SantKabirNagar/SantKabirNagar/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};




module.exports = {
 read_SantKabirNagar,
 
};
