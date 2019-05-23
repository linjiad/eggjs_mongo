'use strict';


const ObjectID = require('mongodb').ObjectID;

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // 1、查找
    let result = await this.app.mongo.find('users');
    console.log(result);
    // 根据条件查询（这种会把符合条件的所有数据都查到）
    result = await this.app.mongo.find('users', { query: { name: 'linjiad' } });
    console.log(result);
    // 根据条件查询（只查询一条）
    result = await this.app.mongo.find('users', { query: { name: 'linjiad' }, limit: 1 });
    console.log(result);
    this.ctx.body = '查询页面';
  }
  async add() {
    // 2、增加
    const result = await this.app.mongo.insertOne('users', { doc: {

      name: 'linjiad',
      age: 20,
      sex: 1,
    } });
    console.log(result);
    this.ctx.body = '增加页面';
  }
  async eit() {
    // 3、修改数据
    const result = await this.app.mongo.findOneAndUpdate('users', {
      filter: { name: 'linjiad' },
      update: {
        $set: {
          name: 'linjiad123',
          age: 30,
        },
      },
    });
    console.log(result);
    this.ctx.body = '修改页面';
  }
  async del() {
    // 4、删除数据
    const result = await this.app.mongo.findOneAndDelete('users', { filter: { name: 'linjiad123' } });
    console.log(result);
    // 5、查找指定id的数据   删除指定_id的数据


    /* const result = await this.app.mongo.find('users', { query: { _id: ObjectID('5b72abc7e4f0720a68f05b41') } });

        console.log(result);*/
    this.ctx.body = '删除页面';
  }
  async findById() {
    // 5、查找指定id的数据   删除指定_id的数据
    const result = await this.app.mongo.find('users', { query: { _id: ObjectID('5ce5fd6d2cb3142fbc38fcae') } });
    console.log(result);
    this.ctx.body = '查找指定id的';
  }
}

module.exports = NewsController;
