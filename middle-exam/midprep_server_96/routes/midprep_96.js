var express = require('express');
var router = express.Router();

let db = require('../utils/database');

router.get('/overview_96', function (req, res, next) {
  res.render('midprep_96/overview_96', {
    name: 'ChungChun Wang',
    ID: '210410196',
  });
});

module.exports = router;
