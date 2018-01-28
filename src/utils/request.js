/**
 * Created by zhaojuntong on 2018/1/27.
 */
import axios from 'axios'

let request = axios.create({
  baseURL: 'http://mockjs.com/dist/mock',
  timeout: 5000
})

request.interceptors.request.use(config => {
  return config
}, error => {
  Promise.reject(error)
})

request.interceptors.response.use(response => {
  return response
}, error => {
  Promise.reject(error)
})

export default request