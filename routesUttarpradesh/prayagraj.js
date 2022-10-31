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
const readdata = require('../models/Prayagraj_raed');

const {add_Prayagraj,add_Jasra,add_Leriyari,add_Sirsa,
 } = require('../src/controller/Prayagraj_Update');
router.post('/Prayagraj', add_Prayagraj);
router.post('/Jasra', add_Jasra);
router.post('/Leriyari', add_Leriyari);
router.post('/Sirsa',add_Sirsa);

*/

router.get('/Prayagraj', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Allahabad'
  },{
    market :'Allahabad'
  }]}

 model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0){
    
      res.render('uttarpradesh/Prayagraj/Prayagraj.hbs');
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/Prayagraj/Prayagraj.hbs',{data,market} );
    
    }
  })
});
router.get('/Prayagraj_all', (req, res) => {
  
    res.render('uttarpradesh/Prayagraj/Prayagraj_allmandi.hbs');
 
});
router.get('/Sirsa', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Allahabad'
  },{
    market :'Sirsa'
  }]}

 model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0){
    
      res.render('uttarpradesh/Prayagraj/Sirsa.hbs' );
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/Prayagraj/Sirsa.hbs',{data,market} );
    
    }
  })
});

router.get('/Jasra', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Allahabad'
  },{
    market :'Jasra'
  }]}

 model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0){
    
      res.render('uttarpradesh/Prayagraj/Jasra.hbs' );
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/Prayagraj/Jasra.hbs',{data,market} );
    
    }
  })
});
router.get('/Leriyari', (req, res) => {

  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Allahabad'
  },{
    market :'Ajuha'
  }]}

 model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0){
    
      res.render('uttarpradesh/Prayagraj/Leriyari.hbs' );
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/Prayagraj/Leriyari.hbs',{data,market} );
    
    }
  })
});
/*
// UPDATES
router.get('/Prayagraj@4056', (req, res) => {
  readdata.read_Prayagraj(function(datas) {
    res.render('uttarpradesh/Prayagraj/Prayagraj_Update.hbs',{data: datas});
  });
});
router.get('/Sirsa@7698', (req, res) => {
  readdata.read_Sirsa(function(datas) {
    res.render('uttarpradesh/Prayagraj/Sirsa_Update.hbs',{data: datas} );
  });  
});
router.get('/Jasra@129', (req, res) => {
  readdata.read_Jasra(function(datas) {
   res.render('uttarpradesh/Prayagraj/Jasra_Update.hbs',{data: datas} );
  }); 
});
router.get('/Leriyari@246', (req, res) => {
  readdata.read_Leriyari(function(datas) {
   res.render('uttarpradesh/Prayagraj/Leriyari_Update.hbs',{data: datas});
  });
});
*/
module.exports = router;
