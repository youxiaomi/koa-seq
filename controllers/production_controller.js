const fs = require('fs');
const path = require('path');
const os = require('os');


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
        var copy_info =info
        copy_info.addStockNum = info.addStockNum + p.addStockNum
        p = await Production.update(copy_info,{where:{barcode: info.barcode }});
      }else{
        p = await Production.create(info);
      }
      ImportRecord.create(info);

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
    },
    async create_img(ctx, next){
      if ('POST' != ctx.method) return await next();

      const file = ctx.request.body.files.myfile;
      const reader = fs.createReadStream(file.path);
      var url = path.join(__dirname,"../public/upload/productions");

      if(!fs.existsSync(url)){
        fs.mkdirSync(url)
      }
      const stream = fs.createWriteStream(path.join(url, file.name ));
      reader.pipe(stream);

      console.log('uploading %s -> %s', file.name, stream.path);

      // ctx.redirect('/');

    }



  }
})()

