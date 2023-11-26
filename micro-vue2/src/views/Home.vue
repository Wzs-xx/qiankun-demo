<template>
  <div class="home">
    <div>我是vue2项目</div>
    <div>
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.huabanimg.com%2Fbe986ed7f97f86f0caf136d87593514a7a3e6e0d1a9f5-Bl2lX2_fw236&refer=http%3A%2F%2Fhbimg.huabanimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658288951&t=e9b33cac2303f5fd18c4202c8b970284"
        alt=""
      />
    </div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <button @click="openVueProject">独立运行vue2项目</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    openVueProject() {
      if (process.env.NODE_ENV === 'development') {
        window.open('//localhost:30000/');
      } else {
        window.open(process.env.VUE_APP_PUBLIC_PATH);
      }
    },
  },
  created() {},
  mounted() {},
};
</script>

vc
