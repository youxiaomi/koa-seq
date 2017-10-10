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
  activeUser: {
    type: Sequelize.STRING
  },
  barcode: {
    type: Sequelize.STRING
  },
  productId:{ type: Sequelize.INTEGER},
  addStockNum:{ type: Sequelize.INTEGER},
});
ImportRecord.sync({force: false});


