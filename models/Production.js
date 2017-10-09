

global.Production = sequelize.define("production", {
  productName: {type: Sequelize.STRING,
    validate:{
      notEmpty: true
    }
  },
  salePrice:{type: Sequelize.INTEGER},
  costPrice:{type: Sequelize.INTEGER},
  weight:{type: Sequelize.STRING},
  taste :{type: Sequelize.STRING},
  addStockNum:{type: Sequelize.INTEGER},
  factory:{type: Sequelize.STRING},
  barcode:{type: Sequelize.STRING,
    validate:{
      notEmpty: true
    }
  },
  activeUser:{
    type: Sequelize.STRING
  }
});

Production.sync({force: false});
