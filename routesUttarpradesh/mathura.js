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
const readdata = require('../models/Mathura_read');

const {add_Mathura,add_Kosikalan
 } = require('../src/controller/Mathura_Update');
router.post('/Mathura', add_Mathura);
router.post('/Kosikalan',add_Kosikalan);

*/

router.get('/Mathura', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Mathura'
  },{
    market :'Mathura'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Mathura/Mathura.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Mathura/Mathura.hbs',{data,market} );
    }
  })
});
router.get('/Mathura_all', (req, res) => {
  
    res.render('uttarpradesh/Mathura/Mathura_allmandi.hbs');
 
});
router.get('/Kosikalan', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Mathura'
  },{
    market :'Kosikalan'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Mathura/Kosikalan.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Mathura/Kosikalan.hbs',{data,market} );
    }
  })
});

/*
// UPDATES
router.get('/Mathura@40533', (req, res) => {
  readdata.read_Mathura(function(datas) {
    res.render('uttarpradesh/Mathura/Mathura_Update.hbs',{data: datas});
  });
});
router.get('/Kosikalan@69', (req, res) => {
  readdata.read_Kosikalan(function(datas) {
    res.render('uttarpradesh/Mathura/Kosikalan_Update.hbs',{data: datas} );
  });  
}); */


module.exports = router;
