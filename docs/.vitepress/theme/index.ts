import type { Component } from 'vue'
import type { EnhanceAppContext, Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './styles/nav.css'
import NavCard from './components/NavCard.vue'
import CopyText from './components/CopyText.vue'

/**
 * 全局组件注册表：新增组件只需在此登记一处，
 * 避免「已 import 但漏写 app.component」导致 Markdown 中渲染成未知标签。
 */
const globalComponents: Record<string, Component> = {
  NavCard,
  CopyText
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: EnhanceAppContext) {
    // 全局注册自定义组件，便于在 Markdown 中直接使用
    for (const [name, component] of Object.entries(globalComponents)) {
      app.component(name, component)
    }
  }
} satisfies Theme
