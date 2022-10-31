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
const readdata = require('../models/KushiNagar_read');

const {add_KushiNagar,add_Rudauli
 } = require('../src/controller/KushiNagar_Update');
router.post('/KushiNagar', add_KushiNagar);




router.get('/KushiNagar', (req, res) => {
  readdata.read_KushiNagar(function(datas) {
    res.render('uttarpradesh/KushiNagar/KushiNagar.hbs', {data: datas});
  });
});
router.get('/KushiNagar_all', (req, res) => {
  
    res.render('uttarpradesh/KushiNagar/KushiNagar_allmandi.hbs');
 
});

// UPDATES
router.get('/KushiNagar@40533', (req, res) => {
  readdata.read_KushiNagar(function(datas) {
    res.render('uttarpradesh/KushiNagar/KushiNagar_Update.hbs',{data: datas});
  });
});



module.exports = router;
