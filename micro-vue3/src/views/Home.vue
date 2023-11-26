<template>
  <div class="home">
    <div>我是vue3项目</div>
    <div>
      <button @click="revampData">修改全局数据</button>
    </div>
    <div>
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>

    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import { getCurrentInstance } from 'vue';
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const revampData = () => {
      proxy.$setGlobalState({ name: 'vue3子应用应用' });
    };

    return {
      revampData,
    };
  },
};
</script>
