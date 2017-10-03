class userController extends androidController{
  constructor() {
    super();
    this.is_login = (ctx,next)=>{
      if(!ctx.session.user_ids){
        // ctx.body = {status:'false'}
        console.log('未登录')
      }else{
        console.log("已经登录")
      }
    }
  }

  index(ctx, next) {
    ctx.session.test_session = 'ssssssa安卓'
    // console.log(ctx.request.body)
    ctx.body = 'user  Hello Wsosssssrld';
  }
  show(ctx,next){
    ctx.session.test_session = 'ssssssa安卓'
    // console.log(ctx.request.body)
    ctx.body = 'user Hello Wsossrld';
  }
  async login(ctx, next){

    this.is_login(ctx,next);

    var query = ctx.request.query
    var user =  await User.findOne({where:{'account':query.account}})
    if(!user){
      ctx.body={login_status : "没有此用户名"};
    }else{
      if(user.password == query.password){
        ctx.session.user_id = user.id
      }else{
        ctx.body = {"login_status" : "密码错误"};
      }
    }
  }
}
module.exports = userController

