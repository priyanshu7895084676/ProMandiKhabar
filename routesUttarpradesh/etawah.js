const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});
const model=require('../model/uttarPradeshSchema');

const axios=require('axios');
// Configure environment variable file
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });
/*
const readdata = require('../models/Etawah_read');

const {add_Bharthana,add_Jaswantnagar, add_Etawah
 } = require('../src/controller/Etawah_Update');
router.post('/Bharthana', add_Bharthana);
router.post('/Jaswantnagar', add_Jaswantnagar);
router.post('/Etawah',add_Etawah);
*/

router.get('/Etawah_all', (req, res) => {
  
  res.render('uttarpradesh/Etawah/Etawah_allmandi.hbs');

});

router.get('/Etawah', (req, res) => {
 
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Etawah'
  },{
    market :'Etawah'
  }]}

 model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0){
    
      res.render('uttarpradesh/Etawah/Etawah.hbs');
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/Etawah/Etawah.hbs',{data,market} );
    
    }
  })
});

router.get('/Bharthana', (req, res) => {
 
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Etawah'
  },{
    market :'Bharthna'
  }]}

 model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0){
    
      res.render('uttarpradesh/Etawah/Bharthana.hbs');
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/Etawah/Bharthana.hbs',{data,market} );
    
    }
  })
});

router.get('/Jaswantnagar', (req, res) => {
  
  const filter={$and:[{
    state :'Uttar Pradesh'
  },{
    district :'Etawah'
  },{
    market :'Etawah'
  }]}

 model.find(filter,(err,data)=>{
    
    if (err){
      console.log('err :',err);
    }else if(data.length==0){
    
      res.render('uttarpradesh/Etawah/Jaswantnagar.hbs');
    } else{
      const market= data[0].market;
     
  
      res.render('uttarpradesh/Etawah/Jaswantnagar.hbs',{data,market} );
    
    }
  })
});

/*
// UPDATES
router.get('/Etawah@4056', (req, res) => {
  readdata.read_Etawah(function(datas) {
    res.render('uttarpradesh/Etawah/Etawah_Update.hbs',{data: datas});
  });
});
router.get('/Bharthana@7698', (req, res) => {
  readdata.read_Bharthana(function(datas) {
    res.render('uttarpradesh/Etawah/Bharthana_Update.hbs',{data: datas} );
  });  
});
router.get('/Jaswantnagar@1299', (req, res) => {
  readdata.read_Jaswantnagar(function(datas) {
   res.render('uttarpradesh/Etawah/Jaswantnagar_Update.hbs',{data: datas} );
  }); 
});
*/
function UpdatePrice() {

  const url = process.env.Uttar_Pradesh_Etawah_API;
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

setInterval(UpdatePrice, 14400045);

module.exports = router;
