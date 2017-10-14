const fs = require('fs');
const Router = require('koa-router');
const routers = {

  // '/':['get','user','index'],
  // '/user':['get','user','show'],
  // '/login':['get','user','login'],
  // '/new_production':['post','production','index'],
}

var controllers = fs.readdirSync('./controllers');

controllers.map(function (c) {
  require('./../controllers/'+c);
})



module.exports=function (app) {
  var router = new Router();
  const admin_router = new Router(
    { prefix: '/admin'}
  );

  admin_router.use(async (ctx,next) =>{
    console.log("判断是否登录" + "")
    await next()
  });

  router
    .get('/login', userController.login )
    .post('/new_production', productionController.create )
    .get('/production', productionController.show )
    .get('/production/index', productionController.index )
    .get('/sell', sellController.create )


  admin_router
    .get('/login',userController.admin)
    .get('/production',productionController.index)





  app.use(router.routes())
    .use(admin_router.routes())
    .use(router.allowedMethods())
    .use(admin_router.allowedMethods());
}


