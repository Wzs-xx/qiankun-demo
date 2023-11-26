// import Vue from 'vue';
// import App from './App.vue';
// import router from './router';

// Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

// ·················上面原先的 下面新增的·····················
import './public-path';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Vue.config.productionTip = false

let instance = null;
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 如何独立运行微应用？
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

// 子组件的协议就ok了
// 注意:导出的方法必须是promise
export async function bootstrap(props) {
  // 启动
}
export async function mount(props) {
  // 挂载
  // onGlobalStateChange 可通过这个属性来进行父子应用通信 发布订阅机制
  render(props);
}
export async function unmount(props) {
  // 卸载
  instance.$destroy();
}
