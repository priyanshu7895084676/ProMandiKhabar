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
const readdata = require('../models/Firozabad_read');

const {add_Firozabad,add_Shikohabad,add_Sirsaganj,add_Tundla,
 } = require('../src/controller/Firozabad_Update');
router.post('/Firozabad', add_Firozabad);
router.post('/Shikohabad', add_Shikohabad);
router.post('/Sirsaganj', add_Sirsaganj);
router.post('/Tundla',add_Tundla);
*/


router.get('/Firozabad', (req, res) => {
 
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Firozabad'
  },{
    market :'Firozabad'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Firozabad/Firozabad.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Firozabad/Firozabad.hbs',{data,market} );
    }
  })
});
router.get('/Firozabad_all', (req, res) => {
  
    res.render('uttarpradesh/Firozabad/Firozabad_allmandi.hbs');
 
});
router.get('/Tundla', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Firozabad'
  },{
    market :'Tundla'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Firozabad/Tundla.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Firozabad/Tundla.hbs',{data,market} );
    }
  })
});

router.get('/Shikohabad', (req, res) => {
 
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Firozabad'
  },{
    market :'Shikohabad'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Firozabad/Shikohabad.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Firozabad/Shikohabad.hbs',{data,market} );
    }
  })

});
router.get('/Sirsaganj', (req, res) => {
 
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Firozabad'
  },{
    market :'Sirsaganj'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Firozabad/Sirsaganj.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Firozabad/Sirsaganj.hbs',{data,market} );
    }
  })
});
/*
// UPDATES
router.get('/Firozabad@4056', (req, res) => {
  readdata.read_Firozabad(function(datas) {
    res.render('uttarpradesh/Firozabad/Firozabad_Update.hbs',{data: datas});
  });
});
router.get('/Tundla@7698', (req, res) => {
  readdata.read_Tundla(function(datas) {
    res.render('uttarpradesh/Firozabad/Tundla_Update.hbs',{data: datas} );
  });  
});
router.get('/Shikohabad@129', (req, res) => {
  readdata.read_Shikohabad(function(datas) {
   res.render('uttarpradesh/Firozabad/Shikohabad_Update.hbs',{data: datas} );
  }); 
});
router.get('/Sirsaganj@246', (req, res) => {
  readdata.read_Sirsaganj(function(datas) {
   res.render('uttarpradesh/Firozabad/Sirsaganj_Update.hbs',{data: datas});
  });
});
*/
// Update function


function UpdatePrice () {

  const url = process.env.Uttar_Pradesh_Firozabad_API;
  axios.get(url)
    .then(function (response) {
      // handle success
      const data = (response.data.records);


      
      if (data != null) {
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

setTimeout(UpdatePrice,14761000);
module.exports = router;
