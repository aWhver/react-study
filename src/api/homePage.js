/**
 * Created by zhaojuntong on 2018/1/30.
 */
import request from 'utils/request'
export function getCarefulSelect (params) {
  return request({
    url: 'homePage/getCarefulSelect',
    type: 'get',
    params: params
  })
}