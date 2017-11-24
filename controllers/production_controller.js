const fs = require('fs');
const path = require('path');
const os = require('os');
var rp = require('request-promise');
var app_key = '50bb2df2b9fe06f3'

global.productionController=(function () {

  const CONTROLLERS={
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

      var page = ctx.query.page,search_val = ctx.query.search_val

      if(search_val){
        var productions
        productions = await Production.findAll({where:{barcode: {[Op.like]: "%"+search_val+"%", }}}
        ,{order: [['id', 'DESC']]});
        if(productions.length ==0 ){
          productions = await Production.findAll({where:{productName: {[Op.like]: "%"+search_val+"%", }}})
        }
        ctx.body.datas = productions
        return
      }

      if(page){
        let limit = 15,offset = (ctx.query.page - 1) * limit
        ctx.body={};
        var productions = await Production.findAll({offset: offset,limit: limit, order: [['id', 'DESC']]});
        let count  = Math.ceil(await Production.count() / limit);
        ctx.body = _.extend({datas: productions},helper.pages_fn(count, page));
      }else{
        var p = await Production.findAll();
        ctx.body=p;
      }

    },
    async show(ctx, next){
      var api_result = {"status":"0","msg":"ok","result":{"barcode":"6940509101690","name":"烧烤土豆","ename":"","unspsc":"","brand":"","type":"","width":"","height":"","depth":"","origincountry":"中国","originplace":"","assemblycountry":"","barcodetype":"","catena":"","isbasicunit":"","packagetype":"","grossweight":"","netcontent":"","netweight":"","description":"","keyword":"","pic":"","price":"","licensenum":"","healthpermitnum":"","company":"四川眉山升泰食品有限公司","expirationdate":""}}
      // 这个是要请求条码api接口的
      var api_url = "http://api.jisuapi.com/barcode2/query?appkey="+app_key+"&barcode="+ctx.request.query.barcode;

      var p = await Production.findOne({where:{barcode: ctx.request.query.barcode}});
      if(p){
        ctx.body=p
      }else{
        // var api_result = await rp({uri: api_url})
        // api_result = JSON.parse(api_result)


        var p_result = api_result.result

        if(api_result.msg != 'ok'){
          ctx.body = null
          return
        }

        p={}
        p.barcode = ctx.request.query.barcode
        p.productName = p_result.name
        p.weight = p_result.netcontent
        p.salePrice = 0
        p.costPrice = 0
        p.taste = ''
        p.addStockNum = 0
        p.factory = p_result.company
        await Production.create(p);
        ctx.body=p
      }

    },
    async import_records(ctx, next){
      var page = ctx.query.page,search_val = ctx.query.search_val

      if(search_val){
        var productions
        productions = await ImportRecord.findAll({where:{barcode: {[Op.like]: "%"+search_val+"%", }}}
          ,{order: [['id', 'DESC']]});
        if(productions.length ==0 ){
          productions = await ImportRecord.findAll({where:{productName: {[Op.like]: "%"+search_val+"%", }}})
        }
        ctx.body.datas = productions
        return
      }


      let limit = 15,offset = (ctx.query.page - 1) * limit;
      var records = await ImportRecord.findAll({offset: offset,limit: limit, order: [['id', 'DESC']]});


      for(let i=0;i<records.length;i++){
        let activeUser = await User.findById(records[i].activeUser);
        records[i].activeUser = activeUser ? activeUser.name: ""
      }

      ctx.body = _.extend({datas: records},helper.pages_fn(Math.ceil(await ImportRecord.count() / limit), page));
    },

    async create_img(ctx, next){
      if ('POST' != ctx.method) return await next();
      const barcode=ctx.request.query.barcode
      const file = ctx.request.body.files.file;
      const reader = fs.createReadStream(file.path);

      const dir = ROOT_DIR_PUBLIC+'/upload/productions';
      const production_dir = path.join(dir, barcode)

      handle_dir(dir, production_dir);

      const file_name = Math.random().toString()+ file.name;

      const production_dir_file = path.join(production_dir, file_name);
      const stream = fs.createWriteStream(production_dir_file);
      reader.pipe(stream);

      var old_products = await Production.findAll({where:{barcode: barcode}});

      old_products.map(function (p) {
        if(!p.imgUrl)return
        old_url = path.join(ROOT_DIR_PUBLIC, p.imgUrl)
        if(fs.existsSync(old_url)){
          console.log(old_url);
          fs.unlinkSync(old_url);
        }
      })
      await Production.update(
        {imgUrl: "/"+path.relative(ROOT_DIR_PUBLIC, production_dir_file)} ,{where:{barcode: barcode}})
      console.log('uploading %s -> %s', file.name, stream.path);
      ctx.status = 200;

    },
    async id_show(ctx, next){

      var p = await Production.findOne({where:{id: ctx.params.id}})
      ctx.body.production = p
    },
    async update(ctx, next){
      delete ctx.request.body['id'];
      delete ctx.request.body['addStockNum'];
      delete ctx.request.body['createdAt'];
      delete ctx.request.body['updatedAt'];
      
      await ImportRecord.create(_.extend({},ctx.request.body,
        {activeUser: ctx.session.user_id,addStockNum:0, productName: ctx.request.body.productName+'(修改商品信息)'}));
      var p = await Production.update(ctx.request.body,{where:{id: ctx.params.id}})
      ctx.status = 200
    },
    async update_stock(ctx, next){
      var p = await Production.findById(ctx.params.id);
      p = p.dataValues
      delete p['id']
      delete p['createdAt']
      delete p['updatedAt']

      var record = await ImportRecord.create(_.extend({},p,{addStockNum: ctx.request.body.addStock, activeUser: ctx.session.user_id}));

      let addStockNum = parseInt(p.addStockNum) + parseInt(ctx.request.body.addStock);
      var p = await Production.update({addStockNum: addStockNum},{where:{id: ctx.params.id}});
      ctx.status = 200
    }
  };



  function handle_dir(url, production_dir) {
    if(!fs.existsSync(url)){
      fs.mkdirSync(url)
    }
    if(!fs.existsSync(production_dir)){
      fs.mkdirSync(production_dir)
    }
  }


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
  };
  return CONTROLLERS

})()

