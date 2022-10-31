const express = require('express');
const bodyparser = require('body-parser');
const model=require('../model/uttarPradeshSchema');

const axios=require('axios');
// Configure environment variable file
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});





router.get('/Pilibhit', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Pilibhit'
    }, {
      market: 'Pilibhit'
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
router.get('/Pilibhit_all', (req, res) => {
  
    res.render('uttarpradesh/Pilibhit/Pilibhit_allmandi.hbs');
 
});
router.get('/Puranpur', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Pilibhit'
    }, {
      market: 'Puranpur'
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

router.get('/Bisalpur', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Pilibhit'
    }, {
      market: 'Vishalpur'
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


router.get('/Billsadda', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Pilibhit'
    }, {
      market: 'Billsadda'
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
