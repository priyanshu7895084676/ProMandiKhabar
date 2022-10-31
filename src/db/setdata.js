const firebase = require('../../conn');
module.exports = {
    saveData: function(req, callback) {
        const username = req.username;
        firebase.database().ref('employee/' + username).set({
            name: req.username,
            email: req.email,
            password: req.password,
            phone: req.phone,
        });
        callback(null, {'statuscode': 200,
         'message': 'inserted succesfully'});
    },
};
