'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async order() {

    /*
        db.order.aggregate([
            {
              $lookup:
                {
                  from: "order_item",
                  localField: "order_id",
                  foreignField: "order_id",
                  as: "items"
                }
          },
          {
            $match:{"all_price":{$gte:90}}
          }

        ],{
          explain:true //分析语句
        })

        */

    const result = await this.app.mongo.aggregate('order', {

      pipeline: [
        {
          $lookup:
                        {
                          from: 'order_item',
                          localField: 'order_id',
                          foreignField: 'order_id',
                          as: 'items',
                        },
        },
        {
          $match: { all_price: { $gte: 90 } },
        },
        {
          $limit: 2,
        },

      ],
      options: {},

    });
    this.ctx.body = result;

  }
}

module.exports = HomeController;
