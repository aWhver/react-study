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
    'sendPrice': '@integer(15, 30)', // 起送价
    'shippingFee': '@integer(0, 8)', // 配送费
    'distance': '@integer(300, 9000)', // 距离
    'sell': '@integer(1000, 4000)', // 销量
    'avatar': '@image(40x40, @color, meituan)', // 商家店面图片
    'avatar1': '@image(120x80, @color, meituan)', // 商家食品图片
    'announcement': '@ctitle', // 公告
    'impressionWall|1': ['味道好', '分量足', '服务好', '包装好'], // 印象墙
    'sendTime': ['@integer(8, 10)-@integer(14, 15)', '@integer(15, 17)-@integer(22, 23)'], // 配送时间
    'time': '@integer(20, 60)',
    'address': '@city(true)',
    'phoneNo': /^1[3-8]\d{9}/,
    'rate': '@integer(3, 5)',
    'type|1': ['川菜', '湘菜', '粤菜', '火锅', '小龙虾', '面包蛋糕', '快餐', '面馆'],
    'foodList|10-25': [
      {
        'foodName': '@cname',
        'price': '@integer(10, 40)',
        'id': '@integer(100, 1000000000)'
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
  },
  getAroundStore: config => {
    const { page = 1, limit = 10 } = paramObj(config.url)
    const aroundStore = merchants.filter((item, index) => index >= (page - 1) * limit && index < page * limit)
    return {
      aroundStore
    }
  }
}