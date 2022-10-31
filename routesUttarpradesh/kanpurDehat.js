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
const readdata = require('../models/KanpurDehat_read');

const {add_Jhinjhak,add_Pukhrayan,add_Rura,
 } = require('../src/controller/KanpurDehat_Update');
router.post('/Jhinjhak', add_Jhinjhak);
router.post('/Pukhrayan', add_Pukhrayan);
router.post('/Rura', add_Rura);


*/

router.get('/Jhinjhak', (req, res) => {
 
   const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Kanpur'
  },{
    market :'	Jhijhank'
  }]}

  model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/KanpurDehat/Jhinjhak.hbs' );
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/KanpurDehat/Jhinjhak.hbs',{data,market} );
    
    }
  })

});
router.get('/KanpurDehat_all', (req, res) => {
  
    res.render('uttarpradesh/KanpurDehat/KanpurDehat_allmandi.hbs');
 
});


router.get('/Pukhrayan', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Kanpur'
  },{
    market :'Pukhrayan'
  }]}

  model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/KanpurDehat/Pukhrayan.hbs' );
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/KanpurDehat/Pukhrayan.hbs',{data,market} );
    
    }
  })
});
router.get('/Rura', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Kanpur'
  },{
    market :'Rura'
  }]}

  model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/KanpurDehat/Rura.hbs' );
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/KanpurDehat/Rura.hbs',{data,market} );
    
    }
  })
});
/*
// UPDATES
router.get('/Jhinjhak@4056', (req, res) => {
  readdata.read_Jhinjhak(function(datas) {
    res.render('uttarpradesh/KanpurDehat/Jhinjhak_Update.hbs',{data: datas});
  });
});

router.get('/Pukhrayan@129', (req, res) => {
  readdata.read_Pukhrayan(function(datas) {
   res.render('uttarpradesh/KanpurDehat/Pukhrayan_Update.hbs',{data: datas} );
  }); 
});
router.get('/Rura@246', (req, res) => {
  readdata.read_Rura(function(datas) {
   res.render('uttarpradesh/KanpurDehat/Rura_Update.hbs',{data: datas});
  });
});*/


module.exports = router;
