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
const readdata = require('../models/KanshiRamNagar_read');

const {add_Kasganj,add_GanjDudwara
 } = require('../src/controller/KanshiRamNagar_Update');
router.post('/Kasganj', add_Kasganj);
router.post('/GanjDundwara',add_GanjDudwara);



router.get('/Kasganj', (req, res) => {
  readdata.read_Kasganj(function(datas) {
    res.render('uttarpradesh/KanshiRamNagar/Kasganj.hbs', {data: datas});
  });
});
router.get('/KanshiRamNagar_all', (req, res) => {
  
    res.render('uttarpradesh/KanshiRamNagar/KanshiRamNagar_allmandi.hbs');
 
});
router.get('/GanjDundwara', (req, res) => {
  readdata.read_GanjDundwara(function(datas) {
    res.render('uttarpradesh/KanshiRamNagar/GanjDundwara.hbs', {data: datas});
  });
});


// UPDATES
router.get('/Kasganj@40533', (req, res) => {
  readdata.read_Kasganj(function(datas) {
    res.render('uttarpradesh/KanshiRamNagar/Kasganj_Update.hbs',{data: datas});
  });
});
router.get('/GanjDudwara@69', (req, res) => {
  readdata.read_GanjDundwara(function(datas) {
    res.render('uttarpradesh/KanshiRamNagar/GanjDundwara_Update.hbs',{data: datas} );
  });  
});


module.exports = router;
