<template>
  <el-menu :router="true" mode="horizontal">
    <!-- 子应用的跳转路径 -->
    <el-menu-item index="/">主应用 main</el-menu-item>
    <el-menu-item index="/react">子应用 react18</el-menu-item>
    <el-menu-item index="/vue2">子应用 vue2</el-menu-item>
    <el-menu-item index="/vue3">子应用 vue3</el-menu-item>
    <el-menu-item index="/about">{{ $store.state.GlobalData }}</el-menu-item>
  </el-menu>
  <router-view />
  <!-- 子应用的容器 -->

  <div id="micro-react"></div>
  <div id="micro-vue2"></div>
  <div id="micro-vue3"></div>
</template>

<script>
export default {
  name: 'App',
  setup() {
    return {};
  },
};
</script>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
