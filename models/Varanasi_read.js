const admin = require('../conn');

const firebase=admin.database();
const read_Varanasi = function(callback) {
firebase.ref('Varanasi/Varanasi/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};




module.exports = {
 read_Varanasi,
 
};
