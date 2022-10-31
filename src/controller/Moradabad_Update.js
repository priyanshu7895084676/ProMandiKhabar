const admin = require('../../conn');
const firebase=admin.database();
const add_Moradabad = async (req, res) => {
    try {
        const id = req.body.id;
        const timestamp = new Date();
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        const date = dateObj.getDate();
        const dateObj1 = new Date(timestamp);
        
        const dates = `${date}/${month}/${year}`;
        
        const data = req.body;
        
        data.date = dates;
        await firebase.ref('Moradabad/Moradabad/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const add_Bahjoi = async (req, res) => {
    try {
        const id = req.body.id;
        const timestamp = new Date();
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        const date = dateObj.getDate();
        const dateObj1 = new Date(timestamp);
       
        const dates = `${date}/${month}/${year}`;
        
        const data = req.body;
        
        data.date = dates;
        await firebase.ref('Moradabad/Bahjoi/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const add_Chandausi = async (req, res) => {
    try {
        const id = req.body.id;
        const timestamp = new Date();
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        const date = dateObj.getDate();
        const dateObj1 = new Date(timestamp);
        const hours = dateObj1.getHours();
        const minutes = dateObj1.getMinutes();
        const seconds = dateObj1.getSeconds();
        const dates = `${date}/${month}/${year}`;
      
        const data = req.body;
        
        data.date = dates;
        await firebase.ref('Moradabad/Chandausi/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const add_Sambhal = async (req, res) => {
    try {
        const timestamp = new Date();
        const dateObj = new Date();
        const id = req.body.id;
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();
        const date = dateObj.getDate();
        const dateObj1 = new Date(timestamp);
        
        const dates = `${date}/${month}/${year}`;
       
        const data = req.body;
        
        data.date = dates;
        await firebase.ref('Moradabad/Sambhal/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};



module.exports = {
    add_Moradabad,
   add_Bahjoi ,
    add_Chandausi,
    add_Sambhal,
};
