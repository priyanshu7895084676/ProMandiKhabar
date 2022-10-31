const admin = require('../../conn');
const firebase=admin.database();
const addAgra = async (req, res) => {
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
        await firebase.ref('agra/agra/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addAchhnera = async (req, res) => {
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
        await firebase.ref('agra/achhnera/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const addFatehpursikri = async (req, res) => {
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
        await firebase.ref('agra/fatehpursikri/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addjagner = async (req, res) => {
    try {
        const timestamp = new Date();
        const dateObj = new Date();
        const id = req.body.id;
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
        await firebase.ref('agra/jagner/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addJarar = async (req, res) => {
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
        await firebase.ref('agra/jarar/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addKhairagarh = async (req, res) => {
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
        await firebase.ref('agra/khairagarh/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addShamashabad = async (req, res) => {
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
        await firebase.ref('agra/shamshabad/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
const addFatehabad = async (req, res) => {
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
        await firebase.ref('agra/fatehabad/' + id).update(data);
   res.send('Record saved successfuly');
    } catch (error) {
 res.status(400).send(error.message);
    }
};

module.exports = {
    addAgra,
    addAchhnera,
    addFatehpursikri,
    addjagner,
    addJarar,
    addKhairagarh,
    addShamashabad,
    addFatehabad,
};
