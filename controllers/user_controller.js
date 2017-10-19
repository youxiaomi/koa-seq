global.userController=(function () {

  function is_login(ctx) {
    ctx.body = {}
    if(!ctx.session.user_id){
      ctx.body.status='false'
      console.log('未登录')
      return false
    }else{
      ctx.body.status='true'
      console.log("已经登录")
      return true;
    }
  }
  return {
    async login(ctx, next){
      is_login(ctx)
      var query = ctx.request.query
      if(query == {})return
      var user =  await User.findOne({where:{'account':query.account}})
      if(!user){
        ctx.body.loginStatus = "没有此用户名";
      }else{
        if(user.password == query.password){
          ctx.session.user_id = user.id
          ctx.body.status = "true"
        }else{
          ctx.body.loginStatus= "密码错误";
        }
      }
    },
    async admin(ctx, next){
      var user =  await User.findAll()
      ctx.body=user;
    },
    async current_user(ctx, next){

      var user = await User.findById(ctx.session.user_id);
      user['password'] = null;
      ctx.body = user;
    },

  }
})()


