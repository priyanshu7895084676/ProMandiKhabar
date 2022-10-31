const firebase = require('../../conn');
const addKannuaj = async (req, res) => {
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
        await firebase.database().ref('kannauj/kannauj/' + id).update(data);
       res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addChhibramau = async (req, res) => {
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
        await firebase.database().ref('kannauj/chhibramau/' + id).update(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = {
    addChhibramau,
    addKannuaj,
};
