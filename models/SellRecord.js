

global.SellRecord = sequelize.define("sellRecord", {
  totalPrice: {
    type: Sequelize.FLOAT
  },
  totalQuality:{
    type: Sequelize.INTEGER
  },
  activeUser:{type: Sequelize.STRING},

});

SellRecord.sync({force: false});
