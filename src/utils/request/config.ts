/**
 * 请求参数 --环境变量不同值也不同
 */

let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  // 生产环境
  BASE_URL = 'http://152.136.185.210:5000'
} else if (process.env.NODE_ENV === 'production') {
  // 发布环境
  BASE_URL = ''
} else {
  // 测试环境
  BASE_URL = ''
}

export { BASE_URL, TIME_OUT }
