class applicationController {
  constructor(options) {
    options = options || {}

    this.bef_ban_lists = ['constructor','init_bef_action'];

    // this.before_actions = ['app_bef'];
    this.init_bef_action(options);
  }
  index(ctx, next) {
    ctx.body = 'Hello Wssssssssssorld';
    // ctx.cookies.set('name', '33ssi', { signed: true });

    ctx.session.test_session = 'ssssssa安卓'
    ctx.session.test_session2 = 'ssssssa安卓2'

    var session = ctx.session.test_session;
    var session2 = ctx.session.test_session2;

    console.log(session)
    console.log(session2)
  }
  app_bef(){
    console.log('app_bef')
  }


  init_bef_action(options){
    // 处理拦截controller
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
          target.apply(this, argumentsList)
        }
      })
    })
  }

}
module.exports = applicationController


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
// var cc = new bb()

