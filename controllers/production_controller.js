global.productionController=(function () {

  function is_login(ctx) {
    ctx.body = {}
    if(!ctx.session.user_id){
      ctx.body.status='false'
      console.log('未登录')
      return false
    }else{
      console.log("已经登录")
      return true;
    }
  }
  return {
    async index(ctx, next){
      var p = await Production.create(JSON.parse(ctx.request.body.productInfo));
      ctx.body = !p.barcode ? {productStatus:false} : {productStatus:true}
    },

  }
})()
