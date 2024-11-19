// .vitepress/config.js
export default {
  // 站点级选项
  base: "/doc/",
  title: 'MyhDoc',
  description: 'Just playing around.',
  search: {
    provider: 'local'
  },
  themeConfig: {
    colorMode: "light",
    logo: "/my-logo.svg",
    nav: [
      {
        text: '前端', items: [
          { text: 'Vue', link: '/markdown-examples' },
          { text: 'React', link: '/api-examples' }
        ]
      },
      {
        text: '后端', items: [
          { text: 'SpringBoot', link: '/markdown-examples' },
          { text: 'SpringCloud', link: '/api-examples' }
        ]
      },
      {
        text: '生活', items: [
          { text: '日记本', link: '/markdown-examples' },
          { text: '相册', link: '/api-examples' },
          { text: '音乐', link: '/api-examples' }
        ]
      },
      {
        text: '博客', items: [
          { text: '博客', link: '/markdown-examples' },
          { text: '博客', link: '/api-examples' }
        ]
      },
      {
        text: '项目', items: [
          { text: '项目', link: '/markdown-examples' },
          { text: '项目', link: '/api-examples' }
        ]
      }
    ],
    socialLinks: [
      // You can add any icon from simple-icons (https://simpleicons.org/):
      { icon: 'github', link: 'https://github.com/yangwan-cw' },
      { icon: 'wechat', link: 'https://github.com/yangwan-cw' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    search: {
      provider: 'local'
    }
  },
}