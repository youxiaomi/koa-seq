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
  timezone: '+08:00'

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
require('./../models/User');
require('./../models/Price');
require('./../models/Production');




async function get_info() {
  var users = await User.findAll({where:{
    firstName:'squid'
  }});



  var prices = users.map((user) => Price.findAll({ where:{userid: user.id} }))

  var all_price = await Promise.all(prices)

  


  console.log(JSON.stringify(all_price))

}

// get_info()

