
const admin = require('../conn');
const db = admin.firestore();
const signin = async (req, res) => {
  const email = req.body.email;
  const pass = req.body.password;
  const auth = admin.auth();

  auth.getUserByEmail(email)
    .then((userRecord) => {
      const id = userRecord.uid;



      const userdata = db.collection('users').doc(id).get().then(user => {
        if (user.exists) {
          const data=user.data();
          const password = data.password;
          const em = data.email;
          const file=data.file;

          if (em == email && password == pass) {
            res.render(file);
          }
          else {
            res.send("email/password wrong ");

          }


        }


      });





    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });
};
module.exports = {
  signin

}