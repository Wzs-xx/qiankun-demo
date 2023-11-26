// 父子应用通信
import { initGlobalState } from 'qiankun';
import store from './store';

const state = {
  //这里写初始化数据
  name: 'wang',
  age: 123,
  count: 0,
};

const actions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  console.log('主应用变更前：', state);
  console.log('主应用变更后：', prev);
  store.commit('setGlobalData', state);
});

store.commit('setGlobalData', state);

export default actions;
