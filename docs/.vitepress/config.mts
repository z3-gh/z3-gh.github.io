import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Z3 Blog",
  description: "个人博客，以需求为导向，优先开源免费方案，收集各类互联网需求并提供落地教程与工具推荐",
  lang: "zh-CN",
  locales: {
    "/": {
      label: "简体中文",
      lang: "zh-CN",
    },
  },
  themeConfig: {

    lightModeSwitchTitle: "切换为浅色模式",
    darkModeSwitchTitle: "切换为深色模式",
    darkModeSwitchLabel: "切换主题",

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    outline: {
      label: "当前页面",
    },

    returnToTopLabel: "返回顶部",

    sidebarMenuLabel: "菜单",

    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      'tools': [
        {
          text: '工具',
          base: '/tools/',
          items: [
            { text: '访问Github', link: 'visit-github' },
            { text: '传文件', link: 'send-files' },
            { text: '阅读', link: 'reading' },
            { text: '影视', link: 'video' },
            { text: '音乐', link: 'music' },
            { text: '游戏', link: 'game' }
          ], link: '/'
        }
      ],

      'resources': [
        {
          text: '资源', link: '/resources/'
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/z3-gh/z3-gh.github.io' }
    ]
  }
})
