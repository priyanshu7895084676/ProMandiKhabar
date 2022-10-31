const admin = require('../conn');

const firebase=admin.database();
const read_Ajhuha = function(callback) {
firebase.ref('Kaushambi/Ajuha/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Manjhanpur = function(callback) {
  firebase.ref('Kaushambi/Manjhanpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Bharwari = function(callback) {
firebase.ref('Kaushambi/Bharwari/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};


module.exports = {
 read_Ajhuha,
  read_Bharwari,
  read_Manjhanpur
 
};
