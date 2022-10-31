
const express = require('express');
const bodyparser = require('body-parser');
const router = new express.Router();
bodyparser.urlencoded({
  extended: true,

});

  module.exports = router;