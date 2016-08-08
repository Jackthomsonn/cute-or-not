'use strict';
(function() {
  var express = require('express'),
    router = express.Router(),
    Animals = require('../models/animals');

  Animals.methods(['get', 'post', 'put', 'delete']);
  Animals.register(router, '/animals');

  module.exports = router;
})();
