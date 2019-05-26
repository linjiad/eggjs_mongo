'use strict';

const Controller = require('egg').Controller;

class MysqlController extends Controller {
  async get() {
    // 1、获取用户表的数据 、  get一次只能查询一条数据
    const result = await this.app.mysql.get('user', { id: 1 });
    this.ctx.body = result;
  }
  async get2() {
    // 2、查询全部数据  指定条件
    const result = await this.app.mysql.select('user', {
      where: { id: 2 },
      limit: 10,
      orders: [[ 'id', 'desc' ]],
    });
    this.ctx.body = result;
  }
  async getAll() {
    // 2、查询全部数据  指定条件
    const result = await this.app.mysql.select('user', {
      limit: 10,
      orders: [[ 'id', 'desc' ]],
    });
    this.ctx.body = result;
  }
  async add() {
    // 3、增加数据
    const result = await this.app.mysql.insert('user', { username: '哈哈哈', password: '123456' });
    this.ctx.body = result;
  }
  async eit() {
    // 5、修改数据根据主键修改
    const userInfo = {
      id: 2,
      username: '小六子',
    };
    const result = await this.app.mysql.update('user', userInfo);
    this.ctx.body = result;
  }
  async eit2() {
    // 用sql语句修改
    const result = await this.app.mysql.query('update user set username=? where password=?', [ '李四', '666666' ]);
    this.ctx.body = result;
  }
  async remove() {
    // 删除数据
    const result = await this.app.mysql.delete('user', {
      id: 1 }
    );
    this.ctx.body = result;
  }
  async index() {
    // 8、mysql事务   数据库事务(Database Transaction) ，是指作为单个逻辑工作单元执行的一系列操作，要么完全地执行，要么完全地不执行
    // mongodb新版本里面也支持事务 在mongodb中使用事务必须创建MongoDB副本集（主从数据库）
    // mysql事务：要么完全地执行，要么完全地不执行
    /*
             两人转账的操作,A给B转账10元
                 1、需要更新user表，让A用户的money-10                A总共有5元  （执行失败） 异常
                 2、需要更新user表，让B用户的money+10                            （执行成功）
             事务：
               如果失败执行回滚操作（如果有一个失败），如果成功执行提交操作（真正的增加到数据库里面）
       */
    const conn = await this.app.mysql.beginTransaction();
    try {
      // await conn.insert(table, row1);
      // await conn.update(table, row2);
      // 增加数据操作
      await conn.insert('user', { username: '哈哈哈哈哈哈哈', password: '123456' }); // 增加成功
      // window.xxxx(); // 不存在  报错
      // 修改数据操作
      await conn.query('update user set username=? where id=?', [ '张三666', '2' ]);
      await conn.commit();
    } catch (err) {
      // error, rollback
      await conn.rollback(); // 回滚
      throw err;
    }
    this.ctx.body = '增加成功';

  }
}
module.exports = MysqlController;
