<template>
  <div style="text-align: center">
    <h1>主应用/vue3子应用 的全局数据</h1>
    <div>姓名 : {{ $store.state.GlobalData.name }}</div>
    <div>年龄 : {{ $store.state.GlobalData.age }}</div>
    <div>数量 : {{ $store.state.GlobalData.count }}</div>

    <el-button type="primary" @click="revampData">修改全局数据</el-button>
  </div>
</template>

<script setup>
import actions from '../actions';
const revampData = () => {
  actions.setGlobalState({ name: '主应用' });
};
</script>
