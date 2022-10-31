const admin = require('../../conn');
const firebase=admin.database();
const add_Mathura = async (req, res) => {
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
        await firebase.ref('Mathura/Mathura/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const add_Kosikalan = async (req, res) => {
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
        await firebase.ref('Mathura/Kosikalan/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};



module.exports = {
   add_Mathura,
   add_Kosikalan
};
