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





router.get('/Bareilly', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Balrampur'
    }, {
      market: 'Bareilly'
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
router.get('/Bareilly_all', (req, res) => {
  
    res.render('uttarpradesh/Bareilly/Bareilly_allmandi.hbs');
 
});
router.get('/Anwla', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Balrampur'
    }, {
      market: 'Anwala'
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

router.get('/Baheri', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Balrampur'
    }, {
      market: 'Bahedi'
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

router.get('/Richha', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Balrampur'
    }, {
      market: 'Richha'
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
