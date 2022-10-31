const admin = require('../conn');

const firebase=admin.database();
const read_Pratapgarh = function(callback) {
firebase.ref('Pratapgarh/Pratapgarh/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};




module.exports = {
 read_Pratapgarh,
 
};
