import DefaultTheme from "vitepress/theme";
import "./styles/index.css"; //引入自定义的样式
import { inBrowser } from "vitepress";
import busuanzi from "busuanzi.pure.js";
import DataPanel from "./components/DataPanel.vue";
import Confetti from "./components/Confetti.vue";
import '@fortawesome/fontawesome-free/css/all.css';
import Contribution from "./components/contribution.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component("DataPanel", DataPanel);//注册全局组件
    app.component("Confetti", Confetti); //注册全局组件
    app.component("Contribution", Contribution); //注册全局组件
    if (inBrowser) {
      router.onAfterRouteChanged = () => {
        busuanzi.fetch();
      };
    }
  },
  // ...DefaultTheme, //或者这样写也可
};