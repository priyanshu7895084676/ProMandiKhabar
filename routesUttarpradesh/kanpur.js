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
const readdata = require('../models/Kanpur_read');

const {add_Kanpur,add_Baripal,add_Chaubepur,add_Uttaripura,
 } = require('../src/controller/Kanpur_Update');
router.post('/Kanpur', add_Kanpur);
router.post('/Baripal', add_Baripal);
router.post('/Chaubepur', add_Chaubepur);
router.post('/Uttaripura',add_Uttaripura);

*/

router.get('/Kanpur', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Kanpur'
  },{
    market :'Kanpur(Grain)'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if (data.length == 0) {



      res.render('uttarpradesh/Azamgarh/Azamgarh.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Kanpur/Kanpur.hbs',{data,market} );
    }
  })
});
router.get('/Kanpur_all', (req, res) => {
  
    res.render('uttarpradesh/Kanpur/Kanpur_allmandi.hbs');
 
});
router.get('/Baripal', (req, res) => {
 
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Kanpur'
  },{
    market :'Varipaal'
  }]}

  model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Kanpur/Baripal.hbs' );
    } else{
      const market=market= data[0].market;
     
  
      res.render('uttarpradesh/Kanpur/Baripal.hbs',{data,market} );
    
    }
  })
});

router.get('/Chaubepur', (req, res) => {
 
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Kanpur'
  },{
    market :'Choubepur'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Kanpur/Chaubepur.hbs',{data,market} );
    }
  })
});
router.get('/Uttaripura', (req, res) => {

  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Kanpur'
  },{
    market :'Uttaripura'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Kanpur/Uttaripura.hbs',{data,market} );
    }
  })
});

// UPDATES
/*
router.get('/Kanpur@4056', (req, res) => {
  readdata.read_Kanpur(function(datas) {
    res.render('uttarpradesh/Kanpur/Kanpur_Update.hbs',{data: datas});
  });
});
router.get('/Baripal@7698', (req, res) => {
  readdata.read_Baripal(function(datas) {
    res.render('uttarpradesh/Kanpur/Baripal_Update.hbs',{data: datas} );
  });  
});
router.get('/Chaubepur@129', (req, res) => {
  readdata.readk_Chaubepur(function(datas) {
   res.render('uttarpradesh/Kanpur/Chaubepur_Update.hbs',{data: datas} );
  }); 
});
router.get('/Uttaripura@246', (req, res) => {
  readdata.read_Uttaripura(function(datas) {
   res.render('uttarpradesh/Kanpur/Uttaripura_Update.hbs',{data: datas});
  });
});*/

// Update function
   function UpdatePrice () {

  const url = process.env.Uttar_Pradesh_Kanpur_API;
  axios.get(url)
    .then(function (response) {
      // handle success
      const data = (response.data.records);


      console.log(data);
      if (data.length!=0) {
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
//UpdatePrice();
setInterval(UpdatePrice,14500000);
module.exports = router;
