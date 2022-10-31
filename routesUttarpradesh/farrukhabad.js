const express = require('express');
const bodyparser = require('body-parser');
const model=require('../model/uttarPradeshSchema');

const axios=require('axios');
// Configure environment variable file
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

//const readdata = require('../models/Farrukhabadreaddata');

const router = new express.Router();
bodyparser.urlencoded({
  extended: true,
});




router.get('/farrukhabad_all', (req, res) => {
  res.render('uttarpradesh/farrukhabad/farrukhabadtotalmandi.hbs');
});



router.get('/farrukhabadtable', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Farukhabad'
  },{
    market :'Farukhabad'
  }]}

 model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0){
    
      res.render('uttarpradesh/farrukhabad/farrukhabadtable.hbs' );
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/farrukhabad/farrukhabadtable.hbs',{data,market} );
    
    }
  })
});
// kaimganj routing for read data
router.get('/kamalganj', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Farukhabad'
  },{
    market :'Kamlaganj'
  }]}

  model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/farrukhabad/kamalganj.hbs' );
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/farrukhabad/kamalganj.hbs',{data,market} );
    
    }
  })
});

// routing for kaimganj
router.get('/kaimganj', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Farukhabad'
  },{
    market :'Kayamganj'
  }]}

  model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/farrukhabad/kaimganj.hbs' );
    } else{
      const market=data[0].market;
     
  
      res.render('uttarpradesh/farrukhabad/kaimganj.hbs',{data,market} );
    
    }
  })
});

// routing for mohammdabad
router.get('/mohammadabad', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Farukhabad'
  },{
    market :'Mohamadabad'
  }]}

  model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/farrukhabad/mohammadabad.hbs' );
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/farrukhabad/mohammadabad.hbs',{data,market} );
    
    }
  })
});


//updates
/*

router.get('/farrukhabad@3412', (req, res) => {
  readdata.readData(function(datas) {
    res.render('uttarpradesh/farrukhabad/farrukhabadcityupdates.hbs', {data: datas});
  }); 
});
// kaimganj routing for read data
router.get('/kamalganj@8240', (req, res) => {
  readdata.readkamalganj(function(datas) {
    res.render('uttarpradesh/farrukhabad/KamalganjUpdate.hbs', {data: datas});
  }); 
});

// routing for kaimganj
router.get('/kaimganj@1267', (req, res) => {
  readdata.readkaimganj(function(datas) {
    res.render('uttarpradesh/farrukhabad/kaimganjUpdates.hbs', {data: datas});
  
});
});
// routing for mohammdabad
router.get('/mohammadabad@5634', (req, res) => {
 
  readdata.readMohammadabad(function(datas) {
    res.render('uttarpradesh/farrukhabad/mohammadabadUpdates.hbs', {data: datas});
  }); 
});
/*
const {addStudent,
  addKaimganj,
  addMohammabad,
  feedback,
  addKamalganj,
} = require('../src/controller/Farrukhabadcontroller');
router.post('/farrukhabad', addStudent);
router.post('/feedback', feedback);
router.post('/kamalganj', addKamalganj);
router.post('/kaimganj', addKaimganj);
router.post('/Mohammadabad', addMohammabad); */

function UpdatePrice() {

  const url = process.env.Uttar_Pradesh_Farukhabad_API;
  axios.get(url)
    .then(function (response) {
      // handle success
      const data = (response.data.records);


     
      if (data.length != 0) {
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

setInterval(UpdatePrice, 14400000);
module.exports = router;
