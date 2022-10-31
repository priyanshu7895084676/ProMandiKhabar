const admin = require('../conn');

const firebase=admin.database();
const read_Shravasti = function(callback) {
firebase.ref('Shravasti/Shravasti/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};




module.exports = {
 read_Shravasti,
 
};
