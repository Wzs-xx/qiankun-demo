<template>
  <div class="home">
    <div style="display: flex; align-items: center">
      <el-image style="width: 100px; height: 100px; border-radius: 50%" :src="url" />
      <div style="font-size: 24px; color: #fff; margin-left: 10px">e只咸鱼</div>
    </div>
    <a style="margin-top: 10px" href="https://qiankun.umijs.org/zh">qiankun官方文档</a>
    <a style="margin: 10px 0" href="https://www.jianshu.com/p/b6c12380e02b">个人整理qiankun学习笔记</a>
    <div>欢迎在评论区留言</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup: function () {
    return {
      url: 'https://upload.jianshu.io/users/upload_avatars/27412553/ed2b2f3f-635a-42c8-ba88-5d8f6eaa19b8?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
    };
  },
};
</script>

<style scoped>
.home {
  background-image: linear-gradient(to right, #7c9be3, rgb(16, 112, 208));
  width: 100%;
  height: calc(100% - 59px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
