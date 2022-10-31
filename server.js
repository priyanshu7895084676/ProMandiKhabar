

const fs = require('fs');
const express = require('express');
const axios = require('axios');
const fileUpload = require('express-fileupload');
// Configure environment variable file
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// Connection of database
const mongoose = require('mongoose');
const DB = process.env.DATABASE;
const db = mongoose.connect(DB, {

}).then(con => {
  // console.log(con.connections);
  console.log('connected successfuly');
});



const admin = require('./conn');


const bodyParser = require('body-parser');


const { empdata } = require("./employeeData/emp_register")



const { signin } = require('./employeeData/signin');
// import routers file
const kannaujRoutes = require('./routesUttarpradesh/kannauj');
const farrukhabadroutes = require('./routesUttarpradesh/farrukhabad');
const agraroutes = require('./routesUttarpradesh/agra');
const aligarh_routes = require('./routesUttarpradesh/aligarh');
const ambedkarnagar_routes = require('./routesUttarpradesh/ambedakarnagar');
const amethi_routes = require('./routesUttarpradesh/amethi');
const auraiya_routes = require('./routesUttarpradesh/auraiya');
const ayodhya_routes = require('./routesUttarpradesh/ayodhya');
const azamgarh_routes = require('./routesUttarpradesh/azamgarh');
const badayun_routes = require('./routesUttarpradesh/badayun');
const baghpat_routes = require('./routesUttarpradesh/baghpat');
const bahraich_routes = require('./routesUttarpradesh/bahraich');
const baliya_routes = require('./routesUttarpradesh/baliya');
const balrampur_routes = require('./routesUttarpradesh/balrampur');
const banda_routes = require('./routesUttarpradesh/banda');
const barabanki_routes = require('./routesUttarpradesh/barabanki');
const bareilly_routes = require('./routesUttarpradesh/bareilly');
const basti_routes = require('./routesUttarpradesh/basti');
const bijnor_routes = require('./routesUttarpradesh/bijnor');
const bulansahar_routes = require('./routesUttarpradesh/bulandsahar');
const chandauli_routes = require('./routesUttarpradesh/chandauli');
const chitrakoot_routes = require('./routesUttarpradesh/chitrakoot');
const devariya_routes = require('./routesUttarpradesh/devariya');
const etah_routes = require('./routesUttarpradesh/etah');
const etawah_routes = require('./routesUttarpradesh/etawah');
const fatehpur_routes = require('./routesUttarpradesh/fatehpur');
const firozabad_routes = require('./routesUttarpradesh/firozabad');
const gautambuddhNagar_routes = require('./routesUttarpradesh/gautambuddhNagar');
const gaziabad_routes = require('./routesUttarpradesh/gaziabad');
const gazipur_routes = require('./routesUttarpradesh/gazipur');
const gonda_routes = require('./routesUttarpradesh/gonda');
const gorakhpur_routes = require('./routesUttarpradesh/gorakhpur');
const hamirpur_routes = require('./routesUttarpradesh/hamirpur');
const hardoi_routes = require('./routesUttarpradesh/hardoi');
const hathras_routes = require('./routesUttarpradesh/hathras');
const Jalaun_routes = require('./routesUttarpradesh/Jalaun');
const Jaunpur_routes = require('./routesUttarpradesh/Jaunpur');
const jhasi_routes = require('./routesUttarpradesh/jhasi');
const jyotibaphuleNagar_routes = require('./routesUttarpradesh/jyotibaphuleNagar');
const kanpur_routes = require('./routesUttarpradesh/kanpur');
const kanpurDehat_routes = require('./routesUttarpradesh/kanpurDehat');
const kansiRamNagar_routes = require('./routesUttarpradesh/kanshiRamNagar');
const kushiNagar_routes = require('./routesUttarpradesh/kushiNagar');
const kaushambi_routes = require('./routesUttarpradesh/kaushambi');
const lakhimpur_routes = require('./routesUttarpradesh/lakhimpur');
const lucknow_routes = require('./routesUttarpradesh/lucknow');
const maharajganj_routes = require('./routesUttarpradesh/maharajganj');
const mahoba_routes = require('./routesUttarpradesh/mahoba');
const mainpuri_routes = require('./routesUttarpradesh/mainpuri');
const mathura_routes = require('./routesUttarpradesh/mathura');
const mau_routes = require('./routesUttarpradesh/mau');
const meerut_routes = require('./routesUttarpradesh/meerut');
const mirzapur_routes = require('./routesUttarpradesh/mirzapur');
const moradabad_routes = require('./routesUttarpradesh/moradabad');
const muzaffarnagar_routes = require('./routesUttarpradesh/muzaffarnagar');
const pilibhit_routes = require('./routesUttarpradesh/pilibhit')
const pratapgarh_routes = require('./routesUttarpradesh/pratapgarh');
const raibaraily_routes = require('./routesUttarpradesh/raibaraily');
const rampur_routes = require('./routesUttarpradesh/rampur');
const Saharanpur_routes = require('./routesUttarpradesh/Saharanpur');
const santkabirnagar_routes = require('./routesUttarpradesh/santkabirnagar');
const santravidasnagar_routes = require('./routesUttarpradesh/santravidasnagar');
const Shahjahanpur_routes = require('./routesUttarpradesh/Shahjahanpur');
const shravasti_routes = require('./routesUttarpradesh/shravasti');
const siddharthnagar_routes = require('./routesUttarpradesh/siddharthnagar');
const sitapur_routes = require('./routesUttarpradesh/sitapur');
const sonbhadra_routes = require('./routesUttarpradesh/sonbhadra');
const sultanpur_routes = require('./routesUttarpradesh/sultanpur');
const lalitpur_routes = require('./routesUttarpradesh/lalitpur');
const unnao_routes = require('./routesUttarpradesh/unnao');
const prayagraj_routes = require('./routesUttarpradesh/prayagraj');
const Varanasi_routes = require('./routesUttarpradesh/varansi');
const model = require('./models/mongoSchema')

const state = require('./all_state_main_file_routes/state');
const sitemap = require('./sitemap/sitemap')
const app = express();


const bodyparser = require('body-parser');
const cors = require('cors')
app.use(bodyParser.json());
app.use(fileUpload());

// setting the path
const path = require('path');
const hbs = require('hbs');
const { isError } = require('util');
// const {registerPartials} =require('hbs');
const port = process.env.Port || 8080;
const staticpath = path.join(__dirname, './pulic');
const templatespath = path.join(__dirname, './templates/views');
const partialspath = path.join(__dirname, './templates/partials');
const datapath = path.join(__dirname, './src/db');
app.use(express.static(__dirname + '/public'));

// middle wears
app.use(express.static(staticpath));
app.use(express.static(datapath));
//app.use.fs();

// app.use(express.static( uttarpradesh));
app.use(bodyparser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.set('view engine', 'hbs');
//app.set('view engine', 'ejs');
app.set('views', templatespath);
hbs.registerPartials(partialspath);
// routing
app.use('/uttarpradesh', aligarh_routes);
app.use('/uttarpradesh', ambedkarnagar_routes);
app.use('/uttarpradesh', amethi_routes);
app.use('/uttarpradesh', auraiya_routes);
app.use('/uttarpradesh', ayodhya_routes);
app.use('/uttarpradesh', azamgarh_routes);
app.use('/uttarpradesh', badayun_routes);
app.use('/uttarpradesh', baghpat_routes);
app.use('/uttarpradesh', bahraich_routes);
app.use('/uttarpradesh', baliya_routes);
app.use('/uttarpradesh', balrampur_routes);
app.use('/uttarpradesh', banda_routes);
app.use('/uttarpradesh', barabanki_routes);
app.use('/uttarpradesh', bareilly_routes);
app.use('/uttarpradesh', basti_routes);
app.use('/uttarpradesh', bijnor_routes);
app.use('/uttarpradesh', bulansahar_routes);
app.use('/uttarpradesh', chandauli_routes);
app.use('/uttarpradesh', chitrakoot_routes);
app.use('/uttarpradesh', devariya_routes);
app.use('/uttarpradesh', etah_routes);
app.use('/uttarpradesh', etawah_routes);
app.use('/uttarpradesh', fatehpur_routes);
app.use('/uttarpradesh', firozabad_routes);
app.use('/uttarpradesh', gautambuddhNagar_routes);
app.use('/uttarpradesh', gaziabad_routes);
app.use('/uttarpradesh', gazipur_routes);
app.use('/uttarpradesh', gonda_routes);
app.use('/uttarpradesh', gorakhpur_routes);
app.use('/uttarpradesh', hamirpur_routes);
app.use('/uttarpradesh', hardoi_routes);
app.use('/uttarpradesh', hathras_routes);
app.use('/uttarpradesh', Jalaun_routes);
app.use('/uttarpradesh', Jaunpur_routes);
app.use('/uttarpradesh', jhasi_routes);
app.use('/uttarpradesh', jyotibaphuleNagar_routes);
app.use('/uttarpradesh', kanpur_routes);
app.use('/uttarpradesh', kanpurDehat_routes);
app.use('/uttarpradesh', kushiNagar_routes);
app.use('/uttarpradesh', kaushambi_routes);
app.use('/uttarpradesh', kansiRamNagar_routes);
app.use('/uttarpradesh', lakhimpur_routes);
app.use('/uttarpradesh', lalitpur_routes);
app.use('/uttarpradesh', lucknow_routes);
app.use('/uttarpradesh', maharajganj_routes);
app.use('/uttarpradesh', mahoba_routes);
app.use('/uttarpradesh', mainpuri_routes);
app.use('/uttarpradesh', mathura_routes);
app.use('/uttarpradesh', mau_routes);
app.use('/uttarpradesh', meerut_routes);
app.use('/uttarpradesh', mirzapur_routes);
app.use('/uttarpradesh', moradabad_routes);
app.use('/uttarpradesh', muzaffarnagar_routes);
app.use('/uttarpradesh', pilibhit_routes);
app.use('/uttarpradesh', pratapgarh_routes);
app.use('/uttarpradesh', prayagraj_routes);
app.use('/uttarpradesh', raibaraily_routes);
app.use('/uttarpradesh', rampur_routes);
app.use('/uttarpradesh', Saharanpur_routes);
app.use('/uttarpradesh', santkabirnagar_routes);
app.use('/uttarpradesh', santravidasnagar_routes);
app.use('/uttarpradesh', Shahjahanpur_routes);
app.use('/uttarpradesh', shravasti_routes);
app.use('/uttarpradesh', siddharthnagar_routes);
app.use('/uttarpradesh', sitapur_routes);
app.use('/uttarpradesh', sonbhadra_routes);
app.use('/uttarpradesh', sultanpur_routes);
app.use('/uttarpradesh', unnao_routes);
app.use('/uttarpradesh', Varanasi_routes);
app.use('/uttarpradesh', kannaujRoutes);

app.use('/uttarpradesh', agraroutes);
app.use('/uttarpradesh', farrukhabadroutes);
app.use('/sitemap', sitemap);
app.use('/state', state);

app.route('/uttarpradeshdistic').get((req, res) => {
  res.render('uttarpradeshdistic.hbs', {
    data: 'uttarpradeshdistic',
  });
});
app.route('/totaldisticmandiname').get((req, res) => {
  res.render('totaldisticmandiname.hbs');
});
app.route('/about').get((req, res) => {
  res.render('about.hbs');
});
app.route('/register').get((req, res) => {
  res.render('registere_emp.hbs');
});


app.route('/privacy').get((req, res) => {
  res.render('privacy.hbs');
});
app.route('/feedback').get((req, res) => {
  res.render('feedback.hbs');
});
app.route('/contect').get((req, res) => {
  res.render('cont.hbs');
});
app.get('/', (req, res) => {
  res.render('index.hbs');
});


 // axios route


/*
model.find(query, function(err,doc){
console.log(doc);
})

 Update function
const UpdatePrice = function () {

  const url = process.env.Uttar_Pradesh_Baghpat_Baraut_API;
  axios.get(url)
    .then(function (response) {
      // handle success
      const data = (response.data.records);


      console.log(data);
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
  //.finally(function () {
  // always executed
  // });




}
UpdatePrice();

*/





app.get('/form', (req, res) => {
  res.render('mandiform');
});
app.get('/signin', (req, res) => {
  res.render('signin.hbs');
});
app.post('/signin', signin);
app.post('/registeremp', empdata);

app.route('/header').get((req, res) => {
  res.render("header.hbs");
});
app.route('/footer').get((req, res) => {
  res.render("footer.hbs");
});
/*

app.route('/FileUpdate').post((req, res) => {
  const file_name = req.body.file_name;
  const data = req.body.data;
  fs.writeFile(file_name, data, function (err) {
    if (err) {
      res.send(err);
    }
    else {
      res.send('files_Updates');
    }

  });

});

// get route for Upload
app.get('/uploadFile', (req, res) => {
  res.render('uploadFile');
});
// Fileupload post route
app.post('/upload', function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + '/public/images' + sampleFile.name;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, function (err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});
*/
// server create
app.listen(port, () => {
  console.log(`server is created on port no ${port}`);
});



