import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick, h } from 'vue';
import { useRoute, useData } from 'vitepress';
import 'virtual:group-icons.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'
import WDocTitleMeta from './components/WDocTitleMeta.vue' //文章顶部
import MyLayout from './components/MyLayout.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendarAlt, faSyncAlt, faFileLines, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 添加到图标库
library.add(faCalendarAlt, faSyncAlt, faFileLines, faEye)
import './style/dark.css'




export default {
    extends: DefaultTheme,
    enhanceApp({ app, router  }) {
        // 注册全局组件
        import('./components/MNavLinks.vue').then(module => {
            app.component('MNavLinks', module.default)
        })

        app.component('weiz-title-meta', WDocTitleMeta)
        app.component('font-awesome-icon', FontAwesomeIcon)

      
        vitepressBackToTop({
            threshold: 300
        })

        if (inBrowser) {
            router.onAfterRouteChanged = () => {
              busuanzi.fetch()
            }
          }
    },
    Layout: () => {
        const props: Record<string, any> = {}
        // 获取 frontmatter
        const { frontmatter } = useData()

        /* 添加自定义 class */
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }

        return h(MyLayout, props)
    },
    setup() {
        const route = useRoute();
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    },
}