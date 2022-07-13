/* eslint-disable  */
// 对ts文件做铺垫 可以识别 .vue 结尾的文件将它声明成模块
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare let $store: any
