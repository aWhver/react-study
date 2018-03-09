/**
 * Created by zhaojuntong on 2018/1/30.
 */
import request from 'utils/request'
export function getCarefulSelect (params) {
  return request({
    url: 'merchants/carefulSelect',
    type: 'get',
    params: params
  })
}

export function getAroundStore (params) {
  return request({
    url: 'merchants/aroundStore',
    type: 'get',
    params
  })
}