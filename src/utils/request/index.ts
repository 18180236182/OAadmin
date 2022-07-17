/**
 * http出口
 */

import HttpRequest from '@/utils/request/request'
import { API_BASE_URL, TIME_OUT } from '@/utils/request/config'
import localCache from '@/utils/cache'

const hRequest = new HttpRequest({
  baseURL: API_BASE_URL,
  timeout: TIME_OUT,
  // 拦截器
  interceptors: {
    // 请求成功
    requestInterceptors: (config) => {
      const token = localCache.getCache('token')
      if (token) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        config.headers.Authorization = `Bearer ${token}`
      }
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
