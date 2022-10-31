const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
const model=require('../model/uttarPradeshSchema');


// Configure environment variable file
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

bodyparser.urlencoded({
  extended: true,

});


router.get('/Bagpat', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Bagpat'
    }, {
      market: 'Bagpat'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Baghpat/baraut.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Baghpat/baraut.hbs', { data, market });
    }
  })
});

router.get('/baraut', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Bagpat'
    }, {
      market: 'Baraut'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Baghpat/baraut.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Baghpat/baraut.hbs', { data, market });
    }
  })
});

router.get('/Baghpat_all', (req, res) => {
  
    res.render('uttarpradesh/Baghpat/Baghpat_allmandi.hbs');
 
});


router.get('/khekra', (req, res) => {
 
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Bagpat'
    }, {
      market: 'Khekda'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Baghpat/khekra.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Baghpat/khekra.hbs', { data, market });
    }
  })
});


// UPDATES



module.exports = router;
