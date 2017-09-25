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
require('./../models/User');
require('./../models/Price');

function association () {
  // global.associations={
    // price: Price.belongsTo(User),
    // User.hasOne(Price)
  // }
  // Price.belongsTo(User)
}
Price.belongsTo(User);
User.hasOne(Price);

function sync() {
  User.sync({force: false});
  Price.sync({force: false});
}
association()
sync();

User.create(
  {firstName:'123',
  Price: {
    num: "22222'"
  }
},{
  include: [ {model: Price} ]
}).then(function (user) {
  // user.setPrices([{num:222}])
})
