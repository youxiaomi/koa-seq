class userController extends applicationController{
  constructor() {
    super();
    this.index = (ctx, next) => {
      ctx.body = 'user  Hello Wsosssssrld';


    };
    this.show = (ctx,next) =>{
      ctx.body = 'user Hello Wsossrld'+ctx.params.id;
    }
  }
}
module.exports = userController

