/**
 * Created by zhaojuntong on 2018/1/27.
 */
import Mock from 'mockjs'
import merchants from './merchants'
Mock.mock(/\/merchants\/carefulSelect/, 'get', merchants.getCarefulSelect)

export default Mock