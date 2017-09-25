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

const User = sequelize.define('user',{
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

User.create({
  firstName: 'dsssssssssssssssssss',
  lastName: 'Hancock'
})

User.findAll().then(function (data) {
  console.log(data)
})




//




// const Users = this.sequelize.define('user', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// });

module.exports = User;
