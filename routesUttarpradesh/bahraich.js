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


router.get('/bahraich', (req, res) => {
 
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Bahraich'
    }, {
      market: 'Bahraich'
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
router.get('/bahraich_all', (req, res) => {
  
    res.render('uttarpradesh/Bahraich/Bahraich_allmandi.hbs');
 
});
router.get('/Mihipurwa', (req, res) => {
 
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Bahraich'
    }, {
      market: 'Mihipurwa'
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

router.get('/nanpara', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Bahraich'
    }, {
      market: 'Naanpara'
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
router.get('/Risia', (req, res) => {
 
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Bahraich'
    }, {
      market: 'Achalda'
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

router.get('/rupaidiha', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Bahraich'
    }, {
      market: 'Ruperdeeha'
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

// UPDATES


module.exports = router;
