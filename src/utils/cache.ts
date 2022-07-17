/**
 * 本地缓存
 */

class LocalCache {
  // 设置
  setCache (key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  // 获得
  getCache (key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  // 删除某一项
  deleteCache (key: string) {
    window.localStorage.removeItem(key)
  }

  // 清除全部
  clearCache () {
    window.localStorage.clear()
  }
}

export default new LocalCache()
