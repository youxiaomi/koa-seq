

global.rootController=(function () {

  return {
    async index(ctx, next){
      await ctx.render('mobile');
    },
    async admin(ctx, next){
      await ctx.render('index');
    },
  }
})()


