const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,
});

// uttarpradesh all district
router.get('/uttarpradesh', (req, res) => {
    res.render('uttarpradesh/uttarpradesh_allmandi.hbs');
  });
module.exports = router;