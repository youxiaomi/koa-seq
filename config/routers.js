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



module.exports=function (app ,upload) {
  var router = new Router();
  const admin_router = new Router(
    { prefix: '/admin'}
  );

  admin_router.use(async (ctx,next) =>{
    ctx.body={}
    if(ctx.session.user_id){
      await next()
    } else{
      if(ctx.url == "/admin/login" || ctx.url == "/admin"){
        await next()
      }else{
        ctx.body.status='false'
        return
      }
    }
  });

  router
    .get('/login', userController.login )
    .post('/new_production', productionController.create )
    .get('/production', productionController.show )
    .get('/production/index', productionController.index )
    .get('/sell', sellController.create )
    .get('/', rootController.index );



  admin_router
    .get('/login',userController.login)
    .get('/current_user',userController.current_user)
    .get('/production',productionController.index)
    .get('/import_records',productionController.import_records)
    .post('/production/create_img', productionController.create_img )
    .get('/', rootController.admin )
    .delete('/logout', userController.logout );

  // }));



  app.use(router.routes())
    .use(admin_router.routes())
    .use(router.allowedMethods())
    .use(admin_router.allowedMethods());
}


