/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1558516172214_2489';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };

  // 基础配置mongo
  exports.mongo = {
    client: {
      host: '127.0.0.1',
      port: '27017',
      name: 'eggcms',
      user: 'eggadmin',
      password: '123456',
      options: {},
    },
  };

  // 利用mongoose连接
  // 第一种配置方式
  /* exports.mongoose = {
    url: 'mongodb://127.0.0.1/example',
    options: {},
  };*/
  // 第二种推荐配置方式(推荐)// mongodb://127.0.0.1/example
  exports.mongoose = {
    client: {
      url: 'mongodb://eggadmin:123456@localhost:27017/eggcms',
      options: {},
    },
  };
  // 连接mysql
  exports.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      database: 'test',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };


  return {
    ...config,
    ...userConfig,
  };
};
