import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Z3 Blog",
  description: "个人博客，以需求为导向，优先开源免费方案，收集各类互联网需求并提供落地教程与工具推荐",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '工具',
        items: [
          { text: '访问Github', link: '/tools/visit-github' },
          { text: '在线工具', link: '/tools/online-tools' }
        ],link: '/tools/'
      },
      {
        text: '娱乐',
        items: [
          { text: '阅读', link: '/entertainment/reading' },
          { text: '影视', link: '/entertainment/video' },
          { text: '音乐', link: '/entertainment/music' },
          { text: '游戏', link: '/entertainment/game' }
        ],link: '/entertainment/'
      },
      {
        text: '资源',link: '/resources/'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z3-gh/z3-gh.github.io' }
    ]
  }
})
