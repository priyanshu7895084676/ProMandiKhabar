const admin = require('../conn');

const firebase=admin.database();
const read_SantRavidasNagar = function(callback) {
firebase.ref('SantRavidasNagar/SantRavidasNagar/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};




module.exports = {
 read_SantRavidasNagar,
 
};
