class ApplicationModel{
  constructor(tabel, options){
    global.this.constructor.name = sequelize.define(tabel, options ); //模型对象存全局

    this.constructor.name.sync({force: false})
  }
}

global.ApplicationModel = ApplicationModel



