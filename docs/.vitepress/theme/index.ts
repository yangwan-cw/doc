import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick, h } from 'vue';
import { useRoute, useData } from 'vitepress';
import 'virtual:group-icons.css'
import "vitepress-markdown-timeline/dist/theme/index.css";
import vitepressBackToTop from 'vitepress-plugin-back-to-top'
import 'vitepress-plugin-back-to-top/dist/style.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        // 注册全局组件
        import('./components/MNavLinks.vue').then(module => {
            app.component('MNavLinks', module.default)
        })
        import('./components/PageInfo.vue').then(module => {
            app.component('PageInfo', module.default)
        })

        vitepressBackToTop({
            // default
            threshold: 300
        })
    },
    Layout: () => {
        const props: Record<string, any> = {}
        // 获取 frontmatter
        const { frontmatter } = useData()

        /* 添加自定义 class */
        if (frontmatter.value?.layoutClass) {
            props.class = frontmatter.value.layoutClass
        }

        return h(DefaultTheme.Layout, props)
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