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
/*
const readdata = require('../models/Azamgarh_read');

const {add_Azamgarh,
 } = require('../src/controller/Azamgarh_Update');
router.post('/Azamgarh', add_Azamgarh);

*/


router.get('/Azamgarh', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Auraiya'
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
router.get('/Azamgarh_all', (req, res) => {
  
    res.render('uttarpradesh/Azamgarh/Azamgarh_allmandi.hbs');
 
});
/*
// UPDATES
router.get('/Azamgarh@40533', (req, res) => {
  readdata.read_Azamgarh(function(datas) {
    res.render('uttarpradesh/Azamgarh/Azamgarh_Update.hbs',{data: datas});
  });
});
*/


module.exports = router;
