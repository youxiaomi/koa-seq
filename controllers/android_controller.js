class androidController extends applicationController{
  constructor() {
    super();
  }
  is_login(ctx,next){
    if(!ctx.session.user_ids){
      // ctx.body = {status:'false'}
      console.log('未登录')
    }else{
      console.log("已经登录")
    }
  }
}
module.exports = androidController

