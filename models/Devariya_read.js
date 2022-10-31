const admin = require('../conn');

const firebase=admin.database();
const read_Devariya = function(callback) {
firebase.ref('Devariya/Devariya/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};




module.exports = {
 read_Devariya,
 
};
