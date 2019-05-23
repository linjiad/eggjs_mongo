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
  router.get('/news/findById', controller.news.findById);
};
