const admin = require('../conn');

const firebase=admin.database();
const read_Basti = function(callback) {
firebase.ref('Basti/Basti/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};




module.exports = {
 read_Basti,
 
};
