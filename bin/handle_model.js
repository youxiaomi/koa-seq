var fs = require('fs')

var Sequelize = require('sequelize');

const sequelize = new Sequelize('koa_sq', 'root', '123123', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});
global.sequelize = sequelize;
global.Sequelize = Sequelize;
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });




// function init_model(model_name, options) {
//
// }
// global.init_model = init_model;

//
//
//
// require('../models/User');
// require('./models/Price');