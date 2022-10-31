const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
const model=require('../model/uttarPradeshSchema');

//const axios=require('axios');
// Configure environment variable file
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

bodyparser.urlencoded({
  extended: true,

});



router.get('/badayun', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Badayoun'
    }, {
      market: 'Badayoun'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Badayun/Badaun.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Badayun/Badaun.hbs', { data, market });
    }
  })
});
router.get('/Badayun_all', (req, res) => {
  
    res.render('uttarpradesh/Badayun/Badayun_allmandi.hbs');
 
});
router.get('/bilsi', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Badayoun'
    }, {
      market: 'Bilsi'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Badayun/Bilsi.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Badayun/Bilsi.hbs', { data, market });
    }
  })
});

router.get('/bisauli', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Badayoun'
    }, {
      market: 'Visoli'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Badayun/Bisauli.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Badayun/Bisauli.hbs', { data, market });
    }
  })
});
router.get('/dataganj', (req, res) => {
 
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Badayoun'
    }, {
      market: 'Dataganj'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Badayun/Dataganj.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Badayun/Dataganj.hbs', { data, market });
    }
  })
});
router.get('/islamnagar', (req, res) => {
 
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Badayoun'
    }, {
      market: 'Babrala'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Badayun/IslamNagar.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Badayun/IslamNagar.hbs', { data, market });
    }
  })
});
router.get('/sahaswan', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Badayoun'
    }, {
      market: 'Shahaswan'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Badayun/Sahaswan.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Badayun/Sahaswan.hbs', { data, market });
    }
  })
});
router.get('/ujhani', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Badayoun'
    }, {
      market: 'Ujhani'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Badayun/Ujhani.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Badayun/Ujhani.hbs', { data, market });
    }
  })
});
router.get('/wazirganj', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Badayoun'
    }, {
      market: 'Wazirganj'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Badayun/Wazirganj.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Badayun/Wazirganj.hbs', { data, market });
    }
  })
});

// UPDATES


module.exports = router;
