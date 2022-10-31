

const admin = require('../../conn');
const firebase=admin.database();
const add_Mahoba = async (req, res) => {
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
        await firebase.ref('Mahoba/Mahoba/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const add_Chakhari = async (req, res) => {
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
        await firebase.ref('Mahoba/Chakhari/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const add_Panwari = async (req, res) => {
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
        await firebase.ref('Mahoba/Panwari/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};




module.exports = {
    add_Chakhari,
    add_Mahoba,
    add_Panwari
};
