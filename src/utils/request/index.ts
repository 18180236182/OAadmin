/**
 * http出口
 */

import HttpRequest from '@/utils/request/request'
import { BASE_URL, TIME_OUT } from '@/utils/request/config'

const hRequest = new HttpRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  // 拦截器
  interceptors: {
    // 请求成功
    requestInterceptors: config => {
      return config
    },
    // 请求失败
    requestInterceptorsCatch: err => {
      return err
    },
    // 响应成功
    responseInterceptors: res => {
      return res
    },
    // 响应失败
    responseInterceptorsCatch: err => {
      return err
    }
  }
})

export default hRequest
