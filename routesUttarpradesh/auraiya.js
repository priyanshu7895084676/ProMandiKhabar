const express = require('express');
const bodyparser = require('body-parser');
const model = require('../model/uttarPradeshSchema');

const axios = require('axios');
// Configure environment variable file
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });
const router = new express.Router();

bodyparser.urlencoded({
  extended: false,

});
/*
const readdata = require('../models/Auraiya_read');

const { add_Achhalda, add_Dibiyapur, add_Auraiya
} = require('../src/controller/Auraiya_Update');
router.post('/Achhalda', add_Achhalda);
router.post('/Dibiyapur', add_Dibiyapur);
router.post('/Auraiya', add_Auraiya);

*/


router.get('/auraiya', (req, res) => {
  // readdata.read_Auraiya(function(datas) {
  //  res.render('uttarpradesh/Auraiya/Auraiya.hbs', {data: datas});
  //});
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Auraiya'
    }, {
      market: 'Auraiya'
    }]
  }
  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Aligarh/Khair.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Auraiya/Auraiya.hbs', { data, market });
    }
  })
});
router.get('/auraiya_all', (req, res) => {

  res.render('uttarpradesh/Auraiya/Auraiya_allmandi.hbs');

});
router.get('/achhalda', (req, res) => {

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



      res.render('uttarpradesh/Aligarh/Khair.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Auraiya/Achhalda.hbs', { data, market });
    }
  })
});

router.get('/dibiyapur', (req, res) => {

  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Auraiya'
    }, {
      market: 'Dibiapur'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else {

      const market = data[0].market;

      res.render('uttarpradesh/Auraiya/Dibiyapur.hbs', { data, market });
    }
  })
});







module.exports = router;
