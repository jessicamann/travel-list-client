const express = require('express');
const placesController = require('./controllers/placesController');

module.exports = function(app) {
  const apiRoutes = express.Router();

  //routes will go here
  apiRoutes.get('/places', placesController.getAllPlaces);

  app.use('/api', apiRoutes);
}