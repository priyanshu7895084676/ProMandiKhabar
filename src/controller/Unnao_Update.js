

const admin = require('../../conn');
const firebase=admin.database();
const add_Unnao = async (req, res) => {
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
        await firebase.ref('Unnao/Unnao/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const add_Bangamau = async (req, res) => {
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
        await firebase.ref('Unnao/Bangamau/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const add_Purwa = async (req, res) => {
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
        await firebase.ref('Unnao/Purwa/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};




module.exports = {
    add_Bangamau,
    add_Unnao,
    add_Purwa
};
