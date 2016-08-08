'use strict';
(function() {
  var express = require('express'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    MongoStore = require('connect-mongo')(session),
    mongoURI,
    app = express(),
    port = process.env.PORT || 5000;

  mongoURI = 'localhost';
  mongoose.connect('mongodb://'+mongoURI+'/cute_or_not/');

  switch(process.env.NODE_ENV) {

  case 'development':
    app.use(express.static('dist'));
    break;
  case 'production':
    app.use(express.static(__dirname));
    break;
  }

  console.log('App is running on port ' + port + ' in ' + process.env.NODE_ENV + ' mode');

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use('/api', require('./routes/animals'));
  app.listen(port);

})();
