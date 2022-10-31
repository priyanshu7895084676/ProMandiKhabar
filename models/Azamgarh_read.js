const admin = require('../conn');

const firebase=admin.database();
const read_Azamgarh = function(callback) {
firebase.ref('Azamgarh/Azamgarh/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};




module.exports = {
 read_Azamgarh,
 
};
