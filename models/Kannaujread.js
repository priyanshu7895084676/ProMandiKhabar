const firebase = require('../conn');
// read data farrukhabad city
const readKannauj= function(callback) {
    firebase.database().ref('kannauj/kannauj/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
});
 };
 // read kamalganj data
 const readChhibramau= function(callback) {
firebase.database().ref('kannauj/chhibramau/')
.once('value').then(function(snapshot) {
      callback(snapshot.val());
});
 };
module.exports = {
   readChhibramau,
   readKannauj,
};
