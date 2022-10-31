const express = require('express');
const bodyparser = require('body-parser');
const model=require('../model/uttarPradeshSchema');

const axios=require('axios');
// Configure environment variable file
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
/*
const readdata = require('../models/Aligarh_read');

const {addAligarh,add_Atrauli,add_Chharra,add_Khair,
 } = require('../src/controller/Aligarh_Update');
router.post('/Aligarh', addAligarh);
router.post('/Atrauli', add_Atrauli);
router.post('/Chharra', add_Chharra);
router.post('/Khair',add_Khair);

*/

router.get('/Aligarh', (req, res) => {
 
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Aligarh'
  },{
    market :'Aligarh'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }
     else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Aligarh/Aligarh.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Aligarh/Aligarh.hbs',{data,market} );
    }
  })
});
router.get('/aligarh_all', (req, res) => {
  
    res.render('uttarpradesh/Aligarh/Aligarh_allmandi.hbs');
 
});


router.get('/atrauli', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Aligarh'
  },{
    market :'Atrauli'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Aligarh/Atrauli.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Aligarh/Atrauli.hbs',{data,market} );
    }
  })
});

router.get('/chharra', (req, res) => {
 
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Aligarh'
  },{
    market :'Charra'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Aligarh/Chharra.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Aligarh/Chharra.hbs',{data,market} );
    }
  })
});
router.get('/khair', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Aligarh'
  },{
    market :'Khair'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Aligarh/Khair.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Aligarh/Khair.hbs',{data,market} );
    }
  })
});
/*
// UPDATES
router.get('/Aligarh@4056', (req, res) => {
  readdata.read_Aligarh(function(datas) {
    res.render('uttarpradesh/Aligarh/Aligarh_Update.hbs',{data: datas});
  });
});
router.get('/Atrauli@167', (req, res) => {
  readdata.readk_Atrauli(function(datas) {
    res.render('uttarpradesh/Aligarh/Atrauli_Update.hbs',{data: datas} );
  });  
});
router.get('/chharra@%129', (req, res) => {
  readdata.read_Chharra(function(datas) {
   res.render('uttarpradesh/Aligarh/Chharra_Update.hbs',{data: datas} );
  }); 
});
router.get('/khair@246%', (req, res) => {
  readdata.read_khair(function(datas) {
   res.render('uttarpradesh/Aligarh/Khair_Update.hbs',{data: datas});
  });
}); */


module.exports = router;
