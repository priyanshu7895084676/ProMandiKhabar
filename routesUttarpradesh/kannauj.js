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
const readdata = require('../models/Kannaujread');
const {addKannuaj, addChhibramau,
} =require('../src/controller/Kannaujcontroller');
router.post('/kannauj', addKannuaj);
router.post('/chhibramau', addChhibramau);*/

router.get('/kannauj', (req, res) => {

  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Kannuj'
  },{
    market :'Kannauj'
  }]}

  model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Kannauj/Kannauj.hbs' );
    } else{
      const market=data[0].market;
     
  
      res.render('uttarpradesh/Kannauj/Kannauj.hbs',{data,market} );
    
    }
  })
});
router.get('/kannauj_all', (req, res) => {
 
    res.render('uttarpradesh/Kannauj/Kannauj_allmandi.hbs' );
  
});
router.get('/chhibramau', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Kannuj'
  },{
    market :'Chhibramau(Kannuj)'
  }]}

  model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Kannauj/chhibramau.hbs' );
    } else{
      const market=data[0].market;
     
  
      res.render('uttarpradesh/Kannauj/chhibramau.hbs',{data,market} );
    
    }
  })
});
/*
//updates routes
router.get('/kannauj@0083', (req, res) => {
  readdata.readKannauj(function(datas) {
   res.render('uttarpradesh/Kannauj/kannaujUpdates.hbs', {data: datas});
  
  });
});

router.get('/chhibramau@783', (req, res) => {
  readdata.readChhibramau(function(datas) {
    res.render('uttarpradesh/Kannauj/chhibramauUpdates.hbs', {data: datas});
    
  });
  
});*/
// Update function
function UpdatePrice () {

  const url = process.env.Uttar_Pradesh_Kannauj_API;
  axios.get(url)
    .then(function (response) {
      // handle success
      const data = (response.data.records);


      
      if (data.length !=0) {
        for (let i = 0; i < data.length; i++) {
          const marketData = new model(data[i]
          );
          // Query object
          const query = {
            $and: [{ state: data[i].state },
            { district: data[i].district },
            { market: data[i].market },
            { commodity: data[i].commodity },
            { variety: data[i].variety }]
          };


          // Create update fields object
          const set = {
            $set: {
              arrival_date: data[i].arrival_date,
              min_price: data[i].min_price,
              max_price: data[i].max_price,
              modal_price: data[i].modal_price
            }
          }
          // Find data from database and Update
          model.findOneAndUpdate(query, set, { new: true }, (error, UpData) => {
            if (error) {
              console.log(error);
            } else if (UpData == null) {
              marketData.save().then(doc => {
                console.log('New save data : ', doc);
              }).catch(err => {
                console.log('err :', err);
              })
            } else { 
              console.log('updated data : ', UpData);
            }
          })
        }

      }


    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
 
}

//setTimeout(UpdatePrice,1440);
module.exports = router;
