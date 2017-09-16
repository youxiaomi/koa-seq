class User extends ApplicationModel{
  constructor(){
    super('user',{
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      }
    })
  }
}
// const User = sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });

