const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
const model=require('../model/uttarPradeshSchema');

const axios=require('axios');
// Configure environment variable file
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

bodyparser.urlencoded({
  extended: true,

});




router.get('/Dohrighat', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Mau(Maunathbhanjan)'
    }, {
      market: 'Doharighat'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Azamgarh/Azamgarh.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Azamgarh/Azamgarh.hbs', { data, market });
    }
  })
});
router.get('/Mau_all', (req, res) => {
  
    res.render('uttarpradesh/Mau/Mau_allmandi.hbs');
 
});


router.get('/Kopanganj', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Mau(Maunathbhanjan)'
    }, {
      market: 'Kopaganj'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Azamgarh/Azamgarh.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Azamgarh/Azamgarh.hbs', { data, market });
    }
  })
});
router.get('/Mau', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Mau(Maunathbhanjan)'
    }, {
      market: 'Mau'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Azamgarh/Azamgarh.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Azamgarh/Azamgarh.hbs', { data, market });
    }
  })
});



module.exports = router;
