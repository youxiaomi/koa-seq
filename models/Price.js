

// class Price extends Application{
//   constructor(){
//     super({
//       num: {
//         type: Sequelize.STRING
//       },
//     })
//   }
//   static new_after(){
//     PRICE.belongsTo(USER);
//   }
// };

global[''] = sequelize.define(model_name.toLowerCase(), options );
global[model_name].sync({force: true})

module.exports = init_model('Price',{
  num: {
    type: Sequelize.STRING
  },
})
;

