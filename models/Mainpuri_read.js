
const admin = require('../conn');

const firebase=admin.database();
const read_Mainpuri = function(callback) {
firebase.ref('Mainpuri/Mainpuri/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Bewar= function(callback) {
  firebase.ref('Mainpuri/Bewar/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Ghiror = function(callback) {
firebase.ref('Mainpuri/Ghiror/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Mainpuri,
 read_Bewar,
 read_Ghiror,

};
