const fs = require('fs');

// 要继承的类必须写前面
const routers = {

  // '/':['get','application','index'],
  '/':['get','user','index'],
  '/user':['post','user','index'],
  '/user':['get','user','show'],
}



var preload_conroller = ['application_controller.js']

var controllers  = fs.readdirSync('./controllers/');
controllers = preload_conroller.concat(controllers)

controllers.map(function (c_name) {
  let controller = require('./../controllers/'+c_name);
  c_name = c_name.replace('_c',"C")
  c_name = c_name.replace('.js',"")
  if(!global[c_name]){
    global[c_name] = controller;
  }
})


module.exports = function (router) {
  for(var r in routers){
    var r_self = routers[r]
    var r_f_c = global[r_self[1]+'Controller']

    var r_fn = new r_f_c()
    router[r_self[0]](r, r_fn[r_self[2]]);
  }
}



// router.get('/', function (ctx, next) {
//   ctx.body = 'Hello Wsorld';
// });

