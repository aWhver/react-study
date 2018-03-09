/**
 * Created by zhaojuntong on 2018/1/27.
 */
import Mock from 'mockjs'
import merchants from './merchants'
Mock.mock(/\/merchants\/carefulSelect/, 'get', merchants.getCarefulSelect)
Mock.mock(/\/merchants\/aroundStore/, 'get', merchants.getAroundStore)
export default Mock