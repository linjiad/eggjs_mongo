'use strict';

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};
// 基础连接mongo
exports.mongo = {
  enable: true,
  package: 'egg-mongo-native',
};
// 利用mongoose连接mongo
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
// 连接mysql
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

