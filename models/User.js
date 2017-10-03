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

global.User = sequelize.define('user',{
  name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  account:{
    type: Sequelize.STRING
  },
  ip:{
    type: Sequelize.STRING
  },

});
User.sync({force: false});


