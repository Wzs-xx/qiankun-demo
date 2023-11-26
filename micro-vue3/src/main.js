// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// createApp(App).use(store).use(router).mount('#app')

import './public-path'; // 注意需要引入public-path
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

let instance = null;

function render(props = {}) {
  const { container, onGlobalStateChange, setGlobalState } = props;
  console.log(props);
  instance = createApp(App);
  instance.config.globalProperties.$onGlobalStateChange = onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = setGlobalState;
  instance.use(router);
  instance.use(store);
  instance.mount(container ? container.querySelector('#app') : '#app');
}

// 如何独立运行微应用？
console.log(!window.__POWERED_BY_QIANKUN__)
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props) {
  // 启动
}
export async function mount(props) {
  // 挂载
  render(props);
}
export async function unmount(props) {
  // 卸载
  instance.unmount();
  instance = null;
}
