
// 要继承的类必须写前面
const routers = {

  '/':['get','application','index'],
  // '/':['get','user','index'],
  '/user':['post','user','index'],
  '/user/:id':['get','user','show'],

}

module.exports = function (router) {
  for(var r in routers){
    var r_self = routers[r]
    var r_f_c = require('./../controllers/'+r_self[1]+'_controller.js')

    var gl_name = r_self[1]+"Controller"

    if(!global[gl_name]){
      global[gl_name] = r_f_c
    }

    var r_fn = new r_f_c()
    router[r_self[0]](r, r_fn[r_self[2]]);
  }
}



// router.get('/', function (ctx, next) {
//   ctx.body = 'Hello Wsorld';
// });

