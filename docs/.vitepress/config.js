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
          { text: 'Html', link: '/markdown-examples' },
          { text: 'Css', link: '/markdown-examples' },
          { text: 'Css3', link: '/markdown-examples' },
          { text: 'JavaScript', link: '/markdown-examples' },
          { text: 'TypeScript', link: '/markdown-examples' },
          { text: 'React', link: '/api-examples' },
          { text: 'Vue3', link: '/api-examples' },
          { text: '公众号 & 小程序开发', link: '/api-examples' },
          { text: 'Flutter', link: '/api-examples' },
          { text: 'Node', link: '/api-examples' },
          { text: 'Webpack', link: '/api-examples' },
          { text: 'Vite', link: '/api-examples' },
          { text: '工具 & 类库', link: '/api-examples' },
        
        ]
      },
      {
        text: '后端', items: [
          { text: 'Java', link: '/markdown-examples' },
          { text: 'Jvm', link: '/markdown-examples' },
          { text: '并发编程', link: '/markdown-examples' },
          { text: 'Git', link: '/markdown-examples' },
          { text: '计算机基础', link: '/markdown-examples' },
          { text: '计算机网络', link: '/markdown-examples' },
          { text: '操作系统', link: '/markdown-examples' },
          { text: '数据结构与算法', link: '/markdown-examples' },
          { text: 'Mysql', link: '/markdown-examples' },
          { text: 'MongoDb', link: '/markdown-examples' },
          { text: 'Redis', link: '/markdown-examples' },
          { text: 'Spring', link: '/markdown-examples' },
          { text: 'SpringMVC', link: '/markdown-examples' },
          { text: 'Mybatis', link: '/markdown-examples' },
          { text: 'SpringBoot', link: '/markdown-examples' },
          { text: 'Linux', link: '/markdown-examples' },
          { text: 'Docker', link: '/markdown-examples' },
          { text: 'Jenkins', link: '/markdown-examples' },
          { text: 'Nginx', link: '/markdown-examples' },
          { text: 'Tomcat', link: '/markdown-examples' },
          { text: 'RabbitMQ', link: '/markdown-examples' },
          { text: '架构知识', link: '/markdown-examples' },
          { text: 'SpringCloud', link: '/api-examples' },
          { text: 'ElasticSearch', link: '/markdown-examples' },
          { text: 'Kafka', link: '/markdown-examples' },
          { text: '其他知识', items:[
            { text: 'web安全', link: '/markdown-examples' },
            { text: '加密解密', link: '/markdown-examples' },
            { text: '服务器安全', link: '/markdown-examples' },
            { text: '网络隔离', link: '/markdown-examples' },
            { text: '授权、认证', link: '/markdown-examples' },
            { text: '日志', link: '/markdown-examples' },
            { text: '监控', link: '/markdown-examples' },
            { text: '性能优化', link: '/markdown-examples' },
            { text: '单元测试', link: '/markdown-examples' }
          ]},
        ]
      },
      {
        text: '零碎知识', link: '/markdown-examples'
      },
      {
        text: '生活', items: [
          { text: '日记本', link: '/markdown-examples' },
          { text: '相册', link: '/api-examples' },
          { text: '音乐', link: '/api-examples' }
        ]
      },
      {
        text: '博客', link: '/markdown-examples'
      },
      {
        text: '项目', items: [
          { text: 'TodoList', link: '/markdown-examples' },
        ]
      },
      {
        text: '关于', items: [
          { text: '关于我', link: '/markdown-examples' },
          { text: '简历', link: '/api-examples' }
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