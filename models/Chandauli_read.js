const admin = require('../conn');

const firebase=admin.database();
const read_Chandauli = function(callback) {
firebase.ref('Chandauli/Chandauli/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};




module.exports = {
 read_Chandauli,
 
};
