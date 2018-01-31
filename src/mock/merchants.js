/**
 * Created by zhaojuntong on 2018/1/27.
 */
import Mock from 'mockjs'
import { paramObj } from 'utils/index'
let merchants = []
const count = 50

for (let i = 0; i < count; i++) {
  merchants.push(Mock.mock({
    'id': '@increment',
    'name': '@name',
    'SendPrice': '@integer(15, 30)', // 起送价
    'shippingFee': '@integer(0, 8)', // 配送费
    'distance': '@integer(600, 15000)', // 距离
    'avatar': '@image(40x40, @color, meituan)', // 商家店面图片
    'avatar1': '@image(120x80, @color, meituan)', // 商家食品图片
    'announcement': '@ctitle', // 公告
    'impressionWall|1-4': ['@integer(0, 3)'], // 印象墙
    'sendTime': ['@integer(8, 10)-@integer(14, 15)', '@integer(15, 17)-@integer(22, 23)'], // 配送时间
    'time': '@integer(20, 60)',
    'address': '@city(true)',
    'phoneNo': /^1[3-8]\d{9}/,
    'rate': '@integer(1, 5)',
    'foodList|10-25': [
      {
        'foodName': '@cname',
        'price': '@integer(10, 40)',
      }
    ]
  }))
}

export default {
  getCarefulSelect: config => {
    const { page = 1, limit = 10 } = paramObj(config.url)
    const carefulSelect = merchants.filter((item, index) => index >= (page - 1) * limit && index < page * limit)
    return {
      carefulSelect
    }
  }
}