const firebase = require('../../conn');
const addStudent = async (req, res) => {
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
        const times = `${hours}:${minutes}:${seconds}`;
        const data = req.body;
        data.time = times;
        data.date = dates;
        await firebase.database().ref('farrukhabad/farrukhabadcity/' + id)
        .update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// farrukhabad updates
const updateTable = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const student = await firebase.database()
        .ref('farrukhabad/farrukhabadcity').child(id);
        await student.update(data);
        res.send('Student record updated successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
// kamalganj update
const addKamalganj = async (req, res) => {
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
        const times = `${hours}:${minutes}:${seconds}`;
        
        const data = req.body;
       
       
        await firebase.database().ref('farrukhabad/kamalganj/' + id)
        .update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const updateKamalganj = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const student = await firebase.database()
        .ref('farrukhabad/kamalganj').child(id);
        await student.update(data);
        res.send('Student record updated successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const feedback = async (req, res) => {
    try {
        const name = req.body.name;
        const data = req.body;
        const student = await firebase.database().ref('feedback/' + name);
        await student.set(data);
        res.send('feedback record updated successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// mohammadabad
const addMohammabad = async (req, res) => {
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
        const times = `${hours}:${minutes}:${seconds}`;
        const data = req.body;
        data.time = times;
        data.date = dates;
        await firebase.database().ref('farrukhabad/Mohammadabad/' + id)
        .update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
// kaimganj update
const addKaimganj = async (req, res) => {
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
        const times = `${hours}:${minutes}:${seconds}`;
        const data = req.body;
        data.time = times;
        data.date = dates;
        await firebase.database().ref('farrukhabad/kaimganj/' + id)
        .update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
module.exports = {
    addStudent,
    addKaimganj,
    addMohammabad,
    updateTable,
    feedback,
    updateKamalganj,
    addKamalganj,
};
