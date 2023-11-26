import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// 解决qiankun中使用不同版本的vue-router导致冲突(主应用vue3子应用vue2路由跳转出错)
import _ from 'lodash';

router.beforeEach((to, from, next) => {
  if (_.isEmpty(history.state.current)) {
    _.assign(history.state, { current: from.fullPath });
  }
  next();
});

export default router;
