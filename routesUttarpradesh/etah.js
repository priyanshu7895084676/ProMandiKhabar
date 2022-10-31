const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
const model=require('../model/uttarPradeshSchema');

const axios = require('axios');
// Configure environment variable file
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });

bodyparser.urlencoded({
  extended: true,

});
/*
const readdata = require('../models/Etah_read');

const {add_Aliganj,add_Avagarh, add_Etah
 } = require('../src/controller/Etah_Update');
router.post('/Aliganj', add_Aliganj);
router.post('/Avagarh', add_Avagarh);
router.post('/Etah',add_Etah);


*/

router.get('/Etah', (req, res) => {
 
  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Etah'
    }, {
      market: 'Etah'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Etah/Etah.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Etah/Etah.hbs', { data, market });
    }
  })
});
router.get('/Etah_all', (req, res) => {

  res.render('uttarpradesh/Etah/Etah_allmandi.hbs');
});

router.get('/Aliganj', (req, res) => {

  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Etah'
    }, {
      market: 'Aliganj'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Etah/Aliganj.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Etah/Aliganj.hbs', { data, market });
    }
  })
});

router.get('/Avagarh', (req, res) => {

  const filter = {
    $and: [{
      state: 'Uttar Pradesh'
    }, {
      district: 'Etah'
    }, {
      market: 'Awagarh'
    }]
  }

  model.find(filter, (err, data) => {
    if (err) {
      console.log('err :', err);
    } else if (data.length == 0) {



      res.render('uttarpradesh/Etah/Avagarh.hbs');
    }
    else {

      const market = data[0].market;

      res.render('uttarpradesh/Etah/Avagarh.hbs', { data, market });
    }
  })
});

/*
// UPDATES
router.get('/Etah@4056', (req, res) => {
  readdata.read_Etah(function(datas) {
    res.render('uttarpradesh/Etah/Etah_Update.hbs',{data: datas});
  });
});
router.get('/Aliganj@7698', (req, res) => {
  readdata.read_Aliganj(function(datas) {
    res.render('uttarpradesh/Etah/Aliganj_Update.hbs',{data: datas} );
  });  
});
router.get('/Avagarh@1299', (req, res) => {
  readdata.read_Avagarh(function(datas) {
   res.render('uttarpradesh/Etah/Avagarh_Update.hbs',{data: datas} );
  }); 
});*/

function UpdatePrice() {

  const url = process.env.Uttar_Pradesh_Agra_API;
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

setTimeout(UpdatePrice, 14760000);
module.exports = router;
