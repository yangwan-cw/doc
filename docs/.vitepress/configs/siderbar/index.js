// 导出 sidebar 配置

import { link } from "fs";
import { text } from "stream/consumers";

export const sidebar = {
    '/tools/shardingSphere/': [
        { text: '简介', link: '/tools/shardingSphere/' },
        { text: '读写分离', link: '/tools/shardingSphere/读写分离' },
        { text: '数据分片', link: '/tools/shardingSphere/数据分片' },
        { text: '实现方式', link: '/tools/shardingSphere/实现方式' },
        { text: 'docker 环境安装', link: '/tools/shardingSphere/docker环境安装' }
    ],
    '/frontend/htmls/': [
      {
        text: "📄 前端概述",
        link: "/frontend/htmls/",
      },
      {
        text: "📚 前端基础知识",
        link: "/frontend/htmls/fundamentals",
      },
      {
        text: "🧭 学习指南",
        link: "/frontend/htmls/how-to-learn",
      },
      {
        text: "📖 官方文档",
        link: "/frontend/htmls/documentation",
      },
      {
        text: "🛠️ 开发者前端环境",
        link: "/frontend/htmls/environment",
      },
      {
        text: "🔤 HTML 基础知识",
        link: "/frontend/htmls/html",
      },
      {
        text: "🏷️ HTML 标签大全",
        link: "frontend/htmls/html-tags",
      },
      {
        text: "✨ HTML 知识进阶",
        link: "/frontend/htmls/html-advanced",
      },
      {
        text: "🚀 HTML5 新特性",
        link: "/frontend/htmls/html5-new-features",
      }
    ],
    '/frontend/css/':[
      {
        text: "🎨 CSS ",
        items: [
          {
            text: "📘 CSS 入门",
            link: "/frontend/css/css",
          },
          {
            text: "📗 基本 CSS 属性",
            link: "/frontend/css/css-basics",
          },
          {
            text: "🔤 字体 & 文本",
            link: "/frontend/css/font-text",
          },
          {
            text: "🎯 CSS 选择器",
            link: "/frontend/css/selectors",
          },
          {
            text: "📦 盒模型",
            link: "/frontend/css/box-model",
          },
          {
            text: "📐 定位 & 布局",
            link: "/frontend/css/layout-positioning",
          },
          {
            text: "👀 展示 & 可见性",
            link: "/frontend/css/display-visibility",
          },
          {
            text: "🎨 颜色 & 背景",
            link: "/frontend/css/color-background",
          },
          {
            text: "📏 单位",
            link: "/fontend/css/units",
          },
       
          {
            text: "🎞️ 动画与过渡",
            link: "/frontend/css/animation-transition",
          },
          {
            text: "📱 响应式设计",
            link: "/frontend/css/responsive",
          },
          {
            text: "🧰 其他",
            link: "/frontend/css/misc",
          }
        ]
      }
      
    ]
}