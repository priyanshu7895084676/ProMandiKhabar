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
const readdata = require('../models/Amethi_read');

const {add_Jafarganj,add_Jais
 } = require('../src/controller/Amethi_Update');
router.post('/Jafarganj', add_Jafarganj);
router.post('/Jais',add_Jais);



router.get('/jafarganj', (req, res) => {
  readdata.read_Jafarganj(function(datas) {
    res.render('uttarpradesh/Amethi/Jafarganj.hbs', {data: datas});
  });
});
router.get('/amethi_all', (req, res) => {
  
    res.render('uttarpradesh/Amethi/Amethi_allmandi.hbs');
 
});
router.get('/jais', (req, res) => {
  readdata.read_Jais(function(datas) {
    res.render('uttarpradesh/Amethi/Jais.hbs', {data: datas});
  });
});


// UPDATES
router.get('/jafarganj@405', (req, res) => {
  readdata.read_Jafarganj(function(datas) {
    res.render('uttarpradesh/Amethi/Jafarganj_Update.hbs',{data: datas});
  });
});
router.get('/jais@69', (req, res) => {
  readdata.read_Jais(function(datas) {
    res.render('uttarpradesh/Amethi/Jais_Update.hbs',{data: datas} );
  });  
});



module.exports = router;
