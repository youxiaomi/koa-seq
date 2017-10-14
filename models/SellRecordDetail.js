

global.SellRecordDetail = sequelize.define("sellRecordDetail", {
  sellRecordId: {
    type: Sequelize.STRING
  },
  barcode: {
    type: Sequelize.STRING
  },
  productionId:{
    type: Sequelize.STRING
  },
});

SellRecordDetail.sync({force: false});
