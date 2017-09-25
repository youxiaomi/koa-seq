
// 要继承的类必须写前面
const routers = {

  '/':['get','application','index'],
  '/user':['get','user','index'],
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


class aa{
  constructor(options){
    this.before_actions = ['app_bef'];
    this.bef_ban_lists = ['constructor','init_bef_action'];
    this.init_bef_action(options);
  }
  app_bef(){
    console.log("app_bef")
  }


  init_bef_action(options){
    debugger
    this.before_actions =(this.before_actions || []).concat(options.bef_actions || []);
    this.bef_ban_lists = ['constructor'].concat(this.before_actions || [],options.bef_ban_lists || []);

    this.class_fn_lists = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
    var self = this
    this.class_fn_lists.map(function (fn) {
      var is_exist = self.bef_ban_lists.find(function (ban_fn) {
        if(ban_fn == fn)return true
      })

      if(is_exist)return

      self[fn] = new Proxy(self[fn],{
        apply: function(target, thisArg, argumentsList) {
          self.before_actions.map(function (before_action) {
            self[before_action]()
          })
          target.apply(argumentsList)
        }
      })
    })
  }

}

class bb extends aa{
  constructor(){
    var options = {
      bef_ban_lists: ['show'],
      bef_actions: ['volidate']
    }

    super(options)
  }
  index(){
    console.log('index')
  }
  show(){
    console.log('show')
  }

  volidate(){
    console.log('bef')
  }
  login_voliadat(){
    console.log('bef_log')
  }
}
var cc = new bb()
class dd extends aa{
  constructor(){
    super({
//        bef_actions: ['index']
    })
  }
  index(){
    console.log('index')
  }
  show(){
    console.log('show')
  }
  volidate(){
    console.log('bef')
  }
  login_voliadat(){
    console.log('bef_log')
  }
}
var da = new dd()