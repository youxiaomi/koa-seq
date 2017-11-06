// class User extends Application{
//   constructor(){
//     super({
//       firstName: {
//         type: Sequelize.STRING
//       },
//       lastName: {
//         type: Sequelize.STRING
//       }
//     })
//   }
// }

global.ImportRecord = sequelize.define('improtRecord',{
  productName: {type: Sequelize.STRING},
  salePrice:{type: Sequelize.FLOAT},
  costPrice:{type: Sequelize.FLOAT},
  weight:{type: Sequelize.STRING},
  taste :{type: Sequelize.STRING},
  addStockNum:{type: Sequelize.INTEGER,defaultValue:0},
  factory:{type: Sequelize.STRING},
  barcode:{type: Sequelize.STRING},
  activeUser:{type: Sequelize.STRING},
  imgUrl:{type: Sequelize.STRING},
});
ImportRecord.sync({force: false});


