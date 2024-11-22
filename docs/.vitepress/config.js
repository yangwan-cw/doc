// .vitepress/config.js
import { defineConfig } from 'vitepress'; // 确保导入 defineConfig
import sidebar from './sidebar.js';
import nav from './nav.js';
import socialLinks from './socialLinks.js';
import footer from './footer.js';
const vitePressOptions = {
  // 站点级选项
  base: "/doc/",
  title: 'binbin',
  description: 'binbin的文档',
  search: {
    provider: 'local'
  },
  markdown: {
    lineNumbers: true
  },
  editLink: {
    pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
  },
  lastUpdated: true,

  themeConfig: {
    colorMode: "light",
    sidebar:sidebar,
    nav:nav,
    socialLinks: socialLinks,
    footer:footer,
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


export default defineConfig(vitePressOptions);
