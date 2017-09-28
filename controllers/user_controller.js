class userController extends applicationController{
  constructor() {
    super({
      bef_actions:['logo_in']
    });
  }
  index(ctx, next) {
    ctx.session.test_session = 'ssssssa安卓'
    console.log(ctx.request.body)
    ctx.body = 'user  Hello Wsosssssrld';
  }
  show(ctx,next){
    ctx.body = 'user Hello Wsossrld'+ctx.params.id;
  }
  logo_in(ctx,next){
    console.log("log")
  }
}
module.exports = userController

