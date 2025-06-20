/**
 * VitePress 配置文件
 * 用于配置网站的基本信息、主题、导航等
 */
import { defineConfig } from 'vitepress'
import { nav } from './configs/heads'
import { head } from './configs/heads/head.js'
import wrapperResult from './js/quotes.js'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import timeline from "vitepress-markdown-timeline";
import { sidebar } from './configs/siderbar/'


export default withMermaid(defineConfig({
    // 基础配置
    lang: 'zh-CN',                    // 网站语言
    title: "烊婉的学习笔记",          // 网站标题
    description: "路曼曼其修远兮，吾将上下而求索。——《离骚》", // 网站描述
    head: head,                       // 自定义头部配置
    base: '/',                        // 部署基础路径
    lastUpdated: true,                // 显示最后更新时间

    // 主题配置    nav: nav,
    themeConfig: {
        logo: '/logo.png',            // 网站 logo
        search: {
            provider: 'local'         // 本地搜索
        },
        nav,                          // 导航栏配置
        socialLinks: [                // 社交链接
            { icon: 'github', link: 'https://github.com/yangwan-cw' },
            {
                icon: {
                    svg: '<svg t="1748443708234" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2667" width="200" height="200"><path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z" fill="#28C445" p-id="2668"></path><path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z" fill="#28C445" p-id="2669"></path></svg>'
                },
                link: 'http://localhost:63344/Wechat-Official-Account-Web/index.html',
                ariaLabel: 'wechat'
            }
        ],
        lastUpdated: {                // 最后更新时间配置
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',    // 日期格式
                timeStyle: 'medium'    // 时间格式
            },
        },
        docFooter: {                  // 文档页脚配置
            prev: '上一页',
            next: '下一页',
        },
        sidebar: sidebar,
        outline: {                    // 文档大纲配置
            level: [1, 6],
            label: '文档大纲'
        },
        footer: {                     // 页脚配置
            message: wrapperResult[Math.floor(Math.random() * wrapperResult.length)]
        },
    },

    // Markdown 配置
    markdown: {
        config(md) {
            md.use(groupIconMdPlugin)  // 代码组图标插件
            md.use(timeline);          // 时间线插件
            
            // 自定义 Markdown 渲染规则
            md.use((md) => {
                md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
                    let htmlResult = slf.renderToken(tokens, idx, options)
                    if (tokens[idx].tag === 'h1') htmlResult += `<weiz-title-meta />`
                    return htmlResult
                }
            })
        },
        lineNumbers: true,            // 显示行号
        image: {
            lazyLoading: true         // 图片懒加载
        },
        codeCopyButtonTitle: '复制代码', // 代码复制按钮提示
    },

    // Vite 配置
    vite: {
        plugins: [
            groupIconVitePlugin()     // 代码组图标 Vite 插件
        ],
    },
}))
