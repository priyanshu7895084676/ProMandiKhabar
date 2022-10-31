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
const readdata = require('../models/Hathras_read');

const {add_Sadabad,add_SikandaraRao, add_Hathras
 } = require('../src/controller/Hathras_Update');
router.post('/Sadabad', add_Sadabad);
router.post('/SikandraRao', add_SikandaraRao);
router.post('/Hathras',add_Hathras);


*/

router.get('/Hathras', (req, res) => {
 
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



      res.render('uttarpradesh/Hathras/Hathras.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Hathras/Hathras.hbs', { data, market });
    }
  })
});
router.get('/Hathras_all', (req, res) => {
  
    res.render('uttarpradesh/Hathras/Hathras_allmandi.hbs');
 
});

router.get('/Sadabad', (req, res) => {
  
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Hathras'
    }, {
      market: 'Shadabad'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Hathras/Sadabad.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Hathras/Sadabad.hbs', { data, market });
    }
  })
});

router.get('/SikandraRao', (req, res) => {

  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Hathras'
    }, {
      market: 'Sikandraraau'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Hathras/SikandraRao.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Hathras/SikandraRao.hbs', { data, market });
    }
  })
});
/*

// UPDATES
router.get('/Hathras@4056', (req, res) => {
  readdata.read_Hathras(function(datas) {
    res.render('uttarpradesh/Hathras/Hathras_Update.hbs',{data: datas});
  });
});
router.get('/Sadabad@7698', (req, res) => {
  readdata.read_Sadabad(function(datas) {
    res.render('uttarpradesh/Hathras/Sadabad_Update.hbs',{data: datas} );
  });  
});
router.get('/SikandraRao@1299', (req, res) => {
  readdata.read_SikandraRao(function(datas) {
   res.render('uttarpradesh/Hathras/SikandraRao_Update.hbs',{data: datas} );
  }); 
});
*/


module.exports = router;
