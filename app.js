var Koa = require('koa');
const session = require('koa-session');
var body = require('koa-body');
var KeyGrip = require("keygrip");

var path = require('path');
var staticCache = require('koa-static-cache')

const app = new Koa();

global.ROOT_DIR = __dirname;
global.ROOT_DIR_PUBLIC = __dirname+'/public';



app.keys = ['mima'];
const CONFIG = {
  key: 'koa_session',
  maxAge: 1000*60*60*24*10,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: true, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};
const views = require('koa-views');
app.use(views(path.join(__dirname, 'public/static'), { extension: 'html' }));


app.use(session(CONFIG, app));
app.use(body({ multipart: true }));


require('./config/routers.js')(app);
require('./bin/handle_model.js');



var maxAge;
if(process.env.NODE_ENV == "dev"){
  maxAge=0
}else{
  maxAge= 365 * 24 * 60 * 60
}
// app.use(staticCache(path.join(__dirname, 'public'), {
//   maxAge: maxAge
// }))
//
// app.use(staticCache(path.join(__dirname, 'public/static'), {
//   maxAge: maxAge
// }))
//
// app.use(staticCache(path.join(__dirname, 'public/assets'), {
//   maxAge: maxAge
// }))





app.listen(4000);


