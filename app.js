const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const session = require('koa-session');
const KeyGrip = require("keygrip")
var bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

app.use(bodyParser());


app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');

const CONFIG = {
  key: 'koa_session',
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};
app.use(session(CONFIG, app));






require('./config/routers.js')(router);
require('./bin/handle_model.js');




app.use(serve('./public'));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000);