

global.Price = sequelize.define("price", {
  num: {
    type: Sequelize.STRING
  },
  userid:{
    type: Sequelize.INTEGER
  }
});

Price.sync({force: false});
