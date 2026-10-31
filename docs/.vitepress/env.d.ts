/// <reference types="vitepress/client" />
/// <reference types="vite/client" />

// TS 6.0 起 noUncheckedSideEffectImports 默认开启，
// 需显式声明资源型副作用导入（如主题全局 CSS）。
declare module '*.css' {}

// 无 vue-tsc / Volar 语言服务时，SFC 需此声明才能被 TS 识别
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
