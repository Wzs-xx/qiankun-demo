import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

// createApp(App).use(store).use(router).mount('#app')

import { registerMicroApps, start } from 'qiankun';
import microApps from './micro-app';
import './actions.js'

let app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
app.mount('#app');

registerMicroApps(microApps, {
  beforeMount(app) {
    // console.log('挂载前', app.name);
  },
  afterMount(app) {
    // console.log('卸载后', app.name);
  },
});

start({
  prefetch: false, //取消预加载
  sandbox: { experimentalStyleIsolation: true }, //沙盒模式
});
