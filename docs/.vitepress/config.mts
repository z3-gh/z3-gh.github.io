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
        text: '页面导航',
        items: [
          { text: '在线资源', link: '/nav' },
          { text: '实用工具', link: '/实用工具' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z3-gh/z3-gh.github.io' }
    ]
  }
})
