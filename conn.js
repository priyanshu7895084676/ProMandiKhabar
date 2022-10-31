
const admin = require('firebase-admin');

 


const serviceAccount = require('./src/db/serviceAccountKey.json');
const firebaseConfig = {
  apiKey: "AIzaSyCff3IOaMLw2EPSjmJCvQrlSJdGoukYoxo",
  authDomain: "mandi-news-5a86b.firebaseapp.com",
  databaseURL: "https://mandi-news-5a86b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mandi-news-5a86b",
  storageBucket: "mandi-news-5a86b.appspot.com",
  messagingSenderId: "664203964022",
  appId: "1:664203964022:web:b7f834eb4cbc803e2b3957",
  measurementId: "G-HBGJ3CX7L7",
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mandi-news-5a86b-default-rtdb.asia-southeast1.firebasedatabase.app"
  
  
  
};






// Initialize Firebase


//var defaultDatabase = fb.database();
const app =admin.initializeApp(firebaseConfig);

module.exports =app;
