'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/order', controller.home.order);
  router.get('/news/find', controller.news.index);
  router.get('/news/add', controller.news.add);
  router.get('/news/del', controller.news.del);
  router.get('/news/eit', controller.news.eit);
  router.get('/news/findById', controller.news.index);
  router.get('/user', controller.user.index);
  router.get('/user/add', controller.user.addUser);
  router.get('/user/eit', controller.user.editUser);
  router.get('/user/remove', controller.user.removeUser);
  router.get('/order', controller.order.index);
  router.get('/mysql/get', controller.mysql.get);
  router.get('/mysql/get2', controller.mysql.get2);
  router.get('/mysql/getall', controller.mysql.getAll);
  router.get('/mysql/add', controller.mysql.add);
  router.get('/mysql/eit', controller.mysql.eit);
  router.get('/mysql/eit2', controller.mysql.eit2);
  router.get('/mysql/remove', controller.mysql.remove);
};
