const admin = require('../conn');

const firebase=admin.database();
const read_Sultanpur = function(callback) {
firebase.ref('Sultanpur/Sultanpur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};




module.exports = {
 read_Sultanpur,
 
};
