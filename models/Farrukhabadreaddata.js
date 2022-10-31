
const admin = require('../conn');

const firebase=admin.database();
// read data farrukhabad city
const readData= function(callback) {
  firebase.ref('farrukhabad/farrukhabadcity/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
});
 };
 // read kamalganj data
 const readkamalganj= function(callback) {
    firebase.ref('farrukhabad/kamalganj/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
});
 };
 // read kaimyamganj data
 const readkaimganj= function(callback) {
  firebase.ref('farrukhabad/kaimganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
});
};
// read mohammadabad data
const readMohammadabad= function(callback) {
  firebase.ref('farrukhabad/Mohammadabad/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
});
};
module.exports = {
    readData,
    readkamalganj,
    readkaimganj,
    readMohammadabad,
};
