var express = require('express');
var logger = require('morgan');
var cors = require('cors');

var listingsRouter = require('./routes/listings');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/listings', listingsRouter);

module.exports = app;
