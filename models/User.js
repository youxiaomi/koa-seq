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
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

User.sync({force: false});

