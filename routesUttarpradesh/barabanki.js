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

});/*
const readdata = require('../models/Barabanki_read');

const {add_Barabanki,add_Safdarganj
 } = require('../src/controller/Barabanki_Update');
router.post('/Barabanki', add_Barabanki);
router.post('/Safdarganj',add_Safdarganj);

*/

router.get('/Barabanki', (req, res) => {
 
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Barabanki'
    }, {
      market: 'Barabanki'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Barabanki/Barabanki.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Azamgarh/Azamgarh.hbs', { data, market });
    }
  })
});
router.get('/Barabanki_all', (req, res) => {
  
    res.render('uttarpradesh/Barabanki/Barabanki_allmandi.hbs');
 
});


router.get('/Safdarganj', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Barabanki'
    }, {
      market: 'Akbarpur'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Barabanki/Safdarganj.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Barabanki/Safdarganj.hbs', { data, market });
    }
  })
});

/*
// UPDATES
router.get('/Barabanki@40533', (req, res) => {
  readdata.read_Barabanki(function(datas) {
    res.render('uttarpradesh/Barabanki/Barabanki_Update.hbs',{data: datas});
  });
});
router.get('/Safdarganj@69', (req, res) => {
  readdata.read_Safdarganj(function(datas) {
    res.render('uttarpradesh/Barabanki/Safdarganj_Update.hbs',{data: datas} );
  });  
}); */


module.exports = router;
