import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import NavCard from './components/NavCard.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('NavCard', NavCard)
  }
} satisfies Theme
