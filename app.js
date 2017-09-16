const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();


require('./config/routers.js')(router);
require('./bin/handle_model.js');

app.use(serve('./public'));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000);