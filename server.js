//'use strict'

var express = require('express'),
    routes = require('./app/routes/routes.js'),
    mongoose = require('mongoose'),
    config = require('./app/Other/config.js');

//var GoogleSearch = require('google-search');

var asdf = 4;

var app = express();

//mongoose.connect('mongodb://localhost:27017/url_short');
mongoose.connect('mongodb://yo2:qweasd456@ds011261.mlab.com:11261/fcc_api');

app.use('/public', express.static(process.cwd() + '/public'));
//app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening in port : '+port+'...');
});
