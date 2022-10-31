
const admin = require('../conn');
const db = admin.firestore();



const empdata = async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  const file = req.body.file;
  const adress = req.body.adress;
  const phone = req.body.phone;
  const role=req.body.role;
  
  const data= {
    name:name,
    email:email,
    file:file,
    password:password,
    phone: phone,
    role:role,
  }

  admin.auth().createUser(
    {
      email: email,
      emailVerified: false,

      password: password,
      displayName: name,

      disabled: false,

    }


  ).then(() => {

   admin.auth().getUserByEmail(email)
    .then((user) => {
      const userId=user.uid;
      admin.auth().setCustomUserClaims(userId, {role: true});
     
     
       db.collection('users').doc(userId).set(data);
    
    
      res.send('create account ');
    })
    .catch((error) => {
      console.log(error);
    });
   
    
 
  });


  
}

module.exports = {
  empdata

};