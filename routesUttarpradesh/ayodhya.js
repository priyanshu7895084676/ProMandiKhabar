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
const readdata = require('../models/Ayodhya_read');

const {add_Ayodhya,add_Rudauli
 } = require('../src/controller/Ayodhya_Update');
router.post('/Ayodhya', add_Ayodhya);
router.post('/Rudauli',add_Rudauli);


*/
router.get('/ayodhya', (req, res) => {

  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Faizabad'
    }, {
      market: 'Faizabad'
    }]
  }
  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Ayodhya/Ayodhya.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Ayodhya/Ayodhya.hbs', { data, market });
    }
  })
});
router.get('/ayodhya_all', (req, res) => {
  
    res.render('uttarpradesh/Ayodhya/Ayodhya_allmandi.hbs');
 
});
router.get('/rudauli', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Hathras'
    }, {
      market: 'Hathras'
    }]
  }
  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Ayodhya/Rudauli.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Ayodhya/Rudauli.hbs', { data, market });
    }
  })
});

/*
// UPDATES
router.get('/Ayodhya@40533', (req, res) => {
  readdata.read_Ayodhya(function(datas) {
    res.render('uttarpradesh/Ayodhya/Ayodhya_Update.hbs',{data: datas});
  });
});
router.get('/Rudauli@69', (req, res) => {
  readdata.read_Rudauli(function(datas) {
    res.render('uttarpradesh/Ayodhya/Rudauli_Update.hbs',{data: datas} );
  });  
}); */



module.exports = router;
