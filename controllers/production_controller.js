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
    async create(ctx, next){
      var info = JSON.parse(ctx.request.body.productInfo);
      info.activeUser = ctx.session.user_id;
      var p = await Production.findOne({where:{barcode: info.barcode }});
      if(p){
        p = await Production.update({addStockNum: info.addStockNum+p.addStockNum },{where:{barcode: info.barcode }})
      }else{
        p = await Production.create(info);
      }
      ctx.body = p.barcode || p.length>0 ? {productStatus:true} : {productStatus:false};
    },
    async index(ctx, next){
      var p = await Production.findAll();
      ctx.body=p;
    },
    async show(ctx, next){
      var p = await Production.findOne({where:{barcode: ctx.request.query.barcode}})
      ctx.body=p
      // console.log(p)
    }



  }
})()

