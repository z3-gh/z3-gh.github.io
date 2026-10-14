import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Z3's Blog",
  description: "A personal blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '在线资源', link: '/nav' },
      { text: '实用工具', link: '/实用工具' }
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
      { icon: 'github', link: 'https://github.com/z3-gh' }
    ]
  }
})
