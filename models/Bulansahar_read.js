const admin = require('../conn');

const firebase=admin.database();
const read_Bulandsahar = function(callback) {
firebase.ref('Bulandsahar/Bulandsahar/')
.once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kamalganj data
const read_Anupshahar = function(callback) {
  firebase.ref('Bulandsahar/Anupshahar/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read kaimyamganj data
const read_Bhikarpur = function(callback) {
firebase.ref('Bulandsahar/Bhikarpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
// read mohammadabad data
const read_Dibai = function(callback) {
  firebase.ref('Bulandsahar/Dibai/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Gulaothi = function(callback) {
  firebase.ref('Bulandsahar/Gulaothi/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Jahangirabad = function(callback) {
  firebase.ref('Bulandsahar/Jahangirabad/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
});
};
const read_Khurja = function(callback) {
  firebase.ref('Bulandsahar/Khurja/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};
const read_Shikarpur = function(callback) {
  firebase.ref('Bulandsahar/Shikarpur/')
  .once('value').then(function(snapshot) {
    callback(snapshot.val());
  });
};

const read_Siana = function(callback) {
    firebase.ref('Bulandsahar/Siana/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  };

  const read_Sikandrabad = function(callback) {
    firebase.ref('Bulandsahar/Sikandrabad/')
    .once('value').then(function(snapshot) {
      callback(snapshot.val());
    });
  };
module.exports = {
  read_Bulandsahar,
  read_Anupshahar,
  read_Bhikarpur,
  read_Dibai,
  read_Gulaothi,
  read_Jahangirabad,
  read_Khurja,
  read_Shikarpur,
  read_Siana,
  read_Sikandrabad
};
