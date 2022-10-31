const admin = require('../conn');

const firebase=admin.database();
const read_Jalaun = function(callback) {
firebase.ref('Jalaun/Jalaun/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Ait = function(callback) {
  firebase.ref('Jalaun/Ait/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Kadaura = function(callback) {
firebase.ref('Jalaun/Kadaura/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Kalpi = function(callback) {
  firebase.ref('Jalaun/Kalpi/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Konch = function(callback) {
  firebase.ref('Jalaun/Konch/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Madhogarh = function(callback) {
  firebase.ref('Jalaun/Madhogarh/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
});
};
const read_Urai = function(callback) {
  firebase.ref('Jalaun/Urai/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Wazirganj = function(callback) {
  firebase.ref('Jalaun/Wazirganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};

module.exports = {
  read_Jalaun,
  read_Ait,
  read_Kadaura,
  read_Kalpi,
  read_Konch,
  read_Madhogarh,
  read_Urai,
  read_Wazirganj,
};
