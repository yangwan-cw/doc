import { link } from "fs";

const frontendConfig = {
  text: "前端",
  items: [
    {
      text: "概述",
      items: [
        {
          text: "前端概述",
          link: "/frontend/htmls/",
        },
        {
          text: "前端基础知识",
          link: "/frontend/htmls/fundamentals",
        },
        {
          text: "如何学习",
          link: "/frontend/htmls/how-to-learn",
        },
        {
          text: "官方文档",
          link: "/frontend/htmls/documentation",
        },
      ],
    },
    {
      text: "HTML",
      items: [
        {
          text: "开发者前端环境",
          link: "/frontend/htmls/environment",
        },
        {
          text: "HTML 基础知识",
          link: "/frontend/htmls/html",
        },
        {
          text: "HTML 标签",
          link: "frontend/htmls/html-tags",
        },
        {
          text: "HTML 知识进阶",
          link: "/frontend/htmls/html-advanced",
        },
        {
          text: "HTML5 新特性",
          link: "/frontend/htmls/html5-new-features",
        },
      ],
    },
    {
      text: "CSS",
      items: [
        {
          text: "开始",
          link: "/frontend/css",
        },
        {
          text: "css3",
          link: "/frontend/css3",
        },
      ],
    },
    {
      text: "JavaScript",
      items: [
        {
          text: "基础",
          link: "/frontend/",
        },
        {
          text: "框架",
          link: "/frontend/",
        },
      ],
    },
    {
      text: "TypeScript",
      items: [
        {
          text: "基础",
          link: "/frontend/",
        },
      ],
    },
    {
      text: "框架类库",
      items: [
        {
          text: "Vue2",
          link: "/frontend/",
        },
        {
          text: "Vue3",
          link: "/frontend/",
        },
        {
          text: "React",
          link: "/frontend/",
        },
        {
          text: "微信小程序",
          link: "/frontend/",
        },
        {
          text: "Flutter",
          link: "/frontend/",
        },
      ],
    },
    {
      text: "工程",
      items: [
        {
          text: "Webpack",
          link: "/frontend/",
        },
        {
          text: "Vite",
          link: "/frontend/",
        },
        {
          text: "Nginx",
          link: "/frontend/",
        },
      ],
    },
  ],
};

export default frontendConfig;
