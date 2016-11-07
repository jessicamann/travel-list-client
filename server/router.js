const express = require('express');
const placesController = require('./controllers/placesController');

module.exports = function(app) {
  const apiRoutes = express.Router();

  //routes will go here
  apiRoutes.get('/places', placesController.places);

  app.use('/api', apiRoutes);
}