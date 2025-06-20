/**
 * VitePress 主题配置文件
 * 用于自定义主题、注册组件、配置插件等
 */

// 导入 VitePress 默认主题
import DefaultTheme from 'vitepress/theme'
import './style/index.css'

// 导入第三方插件和组件
import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick, h } from 'vue'
import { useRoute, useData } from 'vitepress'
import 'virtual:group-icons.css'
import "vitepress-markdown-timeline/dist/theme/index.css"
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

// 导入自定义组件
import WDocTitleMeta from './components/WDocTitleMeta.vue'  // 文章顶部组件
import MyLayout from './components/MyLayout.vue'

// 导入 FontAwesome 图标
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt, faSyncAlt, faFileLines, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 添加图标到图标库
library.add(faCalendarAlt, faSyncAlt, faFileLines, faEye)

// 导入暗色主题样式
import './style/dark.css'

export default {
    extends: DefaultTheme,

    /**
     * 增强应用配置
     * @param {Object} param0 - 配置对象
     * @param {Object} param0.app - Vue 应用实例
     * @param {Object} param0.router - 路由实例
     */
    enhanceApp({ app, router }) {
        // 注册全局组件
        import('./components/MNavLinks.vue').then(module => {
            app.component('MNavLinks', module.default)
        })

        // 注册自定义组件
        app.component('weiz-title-meta', WDocTitleMeta)
        app.component('font-awesome-icon', FontAwesomeIcon)

        // 配置返回顶部插件
        vitepressBackToTop({
            threshold: 300  // 滚动阈值，单位：像素
        })

        // 配置访问统计
        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
            }
        }
    },

    /**
     * 自定义布局组件
     * @returns {Function} 返回布局组件渲染函数
     */
    Layout: () => {
        const props: Record<string, any> = {}
        // 获取 frontmatter 数据
        const { frontmatter } = useData()

        // 添加自定义 class
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }

        return h(MyLayout, props)
    },

    /**
     * 组件设置
     * 配置图片缩放功能
     */
    setup() {
        const route = useRoute()

        /**
         * 初始化图片缩放功能
         */
        const initZoom = () => {
            // 为所有图片启用缩放功能
            mediumZoom('.main img', { 
                background: 'var(--vp-c-bg)'  // 使用主题背景色
            })
        }

        // 组件挂载时初始化
        onMounted(() => {
            initZoom()
        })

        // 路由变化时重新初始化
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        )
    },
}