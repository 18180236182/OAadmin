/**
 * 请求参数 --环境变量不同值也不同
 */

// if (process.env.NODE_ENV === 'development') {
//   // 生产环境
//   BASE_URL = '/api'
// } else if (process.env.NODE_ENV === 'production') {
//   // 发布环境
//   BASE_URL = '/api'
// } else {
//   // 测试环境
//   BASE_URL = '/api'
// }

export const API_BASE_URL = process.env.VUE_APP_BASE_URL

export const TIME_OUT = 10000
