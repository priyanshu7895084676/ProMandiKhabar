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


router.get('/Saharanpur', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Saharanpur'
    }, {
      market: 'Saharanpur'
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
router.get('/Saharanpur_all', (req, res) => {
  
    res.render('uttarpradesh/Saharanpur/Saharanpur_allmandi.hbs');
 
});
router.get('/Chhutmalpur', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Saharanpur'
    }, {
      market: 'Chutmalpur'
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

router.get('/Deoband', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Saharanpur'
    }, {
      market: 'Devband'
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
router.get('/Gangoh', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Saharanpur'
    }, {
      market: 'Gangoh'
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
router.get('/Nakur', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Saharanpur'
    }, {
      market: 'Nakud'
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
router.get('/Nanota', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Saharanpur'
    }, {
      market: 'Nanuta'
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
router.get('/Sulatanpurchilana', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Saharanpur'
    }, {
      market: 'Sultanpurchilkana'
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
router.get('/Rampurmaniharan', (req, res) => {
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Saharanpur'
    }, {
      market: 'Rampurmaniharan'
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
