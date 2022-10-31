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
const readdata = require('../models/Mainpuri_read');

const {add_Ghiror,add_Bewar, add_Mainpuri
 } = require('../src/controller/Mainpuri_Update');
router.post('/Ghiror', add_Ghiror);
router.post('/Bewar', add_Bewar);
router.post('/Mainpuri',add_Mainpuri);*/




router.get('/Mainpuri', (req, res) => {
 
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Mainpuri'
  },{
    market :'Mainpuri'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Mainpuri/Mainpuri.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Mainpuri/Mainpuri.hbs',{data,market} );
    }
  })
});
router.get('/Mainpuri_all', (req, res) => {
  
    res.render('uttarpradesh/Mainpuri/Mainpuri_allmandi.hbs');
 
});
router.get('/Ghiror', (req, res) => {
 
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Mainpuri'
  },{
    market :'Ghiraur'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Mainpuri/Ghiror.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Mainpuri/Ghiror.hbs',{data,market} );
    }
  })
});

router.get('/Bewar', (req, res) => {
 
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Mainpuri'
  },{
    market :'Bewar'
  }]}

  model.find(filter,(err,data)=>{
    if (err){
      console.log('err :',err);
    }else if(data.length==0) {
    
   
   
      res.render('uttarpradesh/Mainpuri/Bewar.hbs');
    }
    else{
    
      const market=data[0].market;
   
      res.render('uttarpradesh/Mainpuri/Bewar.hbs',{data,market} );
    }
  })
});

/*
// UPDATES
router.get('/Mainpuri@4056', (req, res) => {
  readdata.read_Mainpuri(function(datas) {
    res.render('uttarpradesh/Mainpuri/Mainpuri_Update.hbs',{data: datas});
  });
});
router.get('/Ghiror@7698', (req, res) => {
  readdata.read_Ghiror(function(datas) {
    res.render('uttarpradesh/Mainpuri/Ghiror_Update.hbs',{data: datas} );
  });  
});
router.get('/Bewar@1299', (req, res) => {
  readdata.read_Bewar(function(datas) {
   res.render('uttarpradesh/Mainpuri/Bewar_Update.hbs',{data: datas} );
  }); 
});*/

function UpdatePrice () {

  const url = process.env.Uttar_Pradesh_Mainpuri_API;
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

setTimeout(UpdatePrice,14765000);
module.exports = router;
