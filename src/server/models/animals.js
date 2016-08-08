'use strict';
(function() {
  var restful = require('node-restful'),
    mongoose = restful.mongoose;

  // Schema
  var animalsSchema = new mongoose.Schema({
    image: String,
    cute: Number,
    not: Number
  });

  // Return model
  module.exports = restful.model('Animals', animalsSchema);
})();
