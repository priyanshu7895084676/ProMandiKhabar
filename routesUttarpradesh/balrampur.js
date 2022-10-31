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


router.get('/Balrampur', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Balrampur'
    }, {
      market: 'Balrampur'
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
router.get('/Balrampur_all', (req, res) => {
  
    res.render('uttarpradesh/Balrampur/Balrampur_allmandi.hbs');
 
});
router.get('/Utraula', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Balrampur'
    }, {
      market: 'Utraula'
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

router.get('/Pachperwa', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Balrampur'
    }, {
      market: 'Panchpedwa'
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
router.get('/Tulsipur', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Balrampur'
    }, {
      market: 'Tulsipur'
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
