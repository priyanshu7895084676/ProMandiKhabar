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




router.get('/agra', (req, res) => {
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Agra'
  },{
    market :'Agra'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Agra/Agra.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Agra/Agra.hbs',{data,market} );
    }
  })
});


router.get('/agra_all', (req, res) => {
  
    res.render('uttarpradesh/Agra/agra_allmandi.hbs');
 
});
/*
router.get('/uttarUpdate', (req, res) => {
  
  res.render('uttarpradesh/uttarpradesh_update.hbs');

}); */

router.get('/achhnera', (req, res) => {
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Agra'
  },{
    market :'Achnera'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Agra/Achhnera.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Agra/Achhnera.hbs',{data,market} );
    }
  })
});

router.get('/fatehabad', (req, res) => {
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Agra'
  },{
    market :'Fatehabad'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Agra/Fatehabad.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Agra/Fatehabad.hbs',{data,market} );
    }
  })
});
router.get('/fatehpursikri', (req, res) => {
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Agra'
  },{
    market :'Fatehpur Sikri'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
     res.render('uttarpradesh/Agra/FatehpurSikri.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Agra/FatehpurSikri.hbs',{data,market} );
    }
  })
});
router.get('/jagner', (req, res) => {
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Agra'
  },{
    market :'Jagnair'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
      res.render('uttarpradesh/Agra/Jagner.hbs');
     }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Agra/Jagner.hbs',{data,market} );
    }
  })
});
router.get('/jarar', (req, res) => {
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Agra'
  },{
    market :'Jarar'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
      res.render('uttarpradesh/Agra/Jarar.hbs');
     }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Agra/Jarar.hbs',{data,market} );
    }
  })
});
router.get('/khairagarh', (req, res) => {
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Agra'
  },{
    market :'Khairagarh'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }
    else if(data.length==0) {
      res.render('uttarpradesh/Agra/Khairagarh.hbs');
     }else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Agra/Khairagarh.hbs',{data,market} );
    }
  })
});
router.get('/shamshabad', (req, res) => {
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Agra'
  },{
    market :'Samsabad'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
      res.render('uttarpradesh/Agra/Shamshabad.hbs');
     }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Agra/Shamshabad.hbs',{data,market} );
    }
  })
});


function UpdatePrice () {

  const url = process.env.Uttar_Pradesh_API;
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

setInterval(UpdatePrice,14760000);

// Update function

module.exports = router;
