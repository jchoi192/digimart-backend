var express = require('express');
const { response } = require('../app');
var router = express.Router();
var Listing = require('../models/listing');


router.get('/', function(req, res, next) {
  res.status(200).json([
    {title: 'Joe',
    price: 10}
  ])
});

router.post('/', function(req, res) {
  Listing.create(req.body, function(err, listing) {
    res.status(201).json(listing);
  });
});

module.exports = router;
