const admin = require('../conn');

const firebase=admin.database();
const read_Lakhimpur = function(callback) {
firebase.ref('Lakhimpur/Lakhimpur/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Golagokarnnath = function(callback) {
  firebase.ref('Lakhimpur/Golagokarnnath/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Maigalganj = function(callback) {
firebase.ref('Lakhimpur/Maigalganj/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Mohamadi = function(callback) {
  firebase.ref('Lakhimpur/Mohamadi/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Paliakalan = function(callback) {
  firebase.ref('Lakhimpur/Paliakalan/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Tikonia = function(callback) {
  firebase.ref('Lakhimpur/Tikonia/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
});
};
const read_Urai = function(callback) {
  firebase.ref('Lakhimpur/Urai/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};

module.exports = {
  read_Lakhimpur,
  read_Golagokarnnath,
  read_Maigalganj,
  read_Mohamadi,
  read_Paliakalan,
  read_Tikonia,
 
};
