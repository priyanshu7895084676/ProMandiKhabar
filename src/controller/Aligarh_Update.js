const admin = require('../../conn');
const firebase=admin.database();
const addAligarh = async (req, res) => {
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
        await firebase.ref('aligarh/aligarh/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const add_Atrauli = async (req, res) => {
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
        await firebase.ref('aligarh/atrauli/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const add_Chharra = async (req, res) => {
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
        await firebase.ref('aligarh/chharra/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const add_Khair = async (req, res) => {
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
        await firebase.ref('aligarh/khair/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};



module.exports = {
    addAligarh,
   add_Atrauli ,
    add_Chharra,
    add_Khair,
};
