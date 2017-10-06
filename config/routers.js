const fs = require('fs');

const routers = {

  // '/':['get','user','index'],
  // '/user':['get','user','show'],
  // '/login':['get','user','login'],
  // '/new_production':['post','production','index'],
}

require('./../controllers/user_controller');
require('./../controllers/production_controller');


module.exports=function (router) {
  router.get('/login', userController.login );

  router.post('/new_production', productionController.index );

}


