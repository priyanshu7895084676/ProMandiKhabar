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



router.get('/Fatehpur', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Fatehpur'
    }, {
      market: 'Fatehpur'
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

      res.render('uttarpradesh/Fatehpur/Achhalda.hbs', { data, market });
    }
  })
});
router.get('/Fatehpur_all', (req, res) => {
  
    res.render('uttarpradesh/Fatehpur/Fatehpur_allmandi.hbs');
 
});
router.get('/Bindki', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Fatehpur'
    }, {
      market: 'Bindki'
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

      res.render('uttarpradesh/Fatehpur/Achhalda.hbs', { data, market });
    }
  })
});

router.get('/Jahanabad', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Fatehpur'
    }, {
      market: 'Jahanabad'
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

      res.render('uttarpradesh/Fatehpur/Achhalda.hbs', { data, market });
    }
  })
});
router.get('/Khaga', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Fatehpur'
    }, {
      market: 'Khaga'
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

      res.render('uttarpradesh/Fatehpur/Achhalda.hbs', { data, market });
    }
  })

});
router.get('/Kishanpur', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Fatehpur'
    }, {
      market: 'Kishunpur'
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

      res.render('uttarpradesh/Fatehpur/Achhalda.hbs', { data, market });
    }
  })
});




module.exports = router;
