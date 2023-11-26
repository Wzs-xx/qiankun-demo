const microApps = [
  {
    name: 'micro-react', //应用名 项目名最好也是这个
    entry: process.env.NODE_ENV === 'development' ? '//localhost:20000' : '/subapp/micro-react/', //默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）内部用的fetch
    activeRule: '/react', // 激活的路径
    container: '#micro-react', // 容器名
    props: {}, //父子应用通信
  },
  {
    name: 'micro-vue2',
    entry: process.env.NODE_ENV === 'development' ? '//localhost:30000' : '/subapp/micro-vue2/',
    activeRule: '/vue2',
    container: '#micro-vue2',
    props: {},
  },
  {
    name: 'micro-vue3',
    entry: process.env.NODE_ENV === 'development' ? '//localhost:40000' : '/subapp/micro-vue3/',
    activeRule: '/vue3',
    container: '#micro-vue3',
    props: { msg: 'e只咸鱼' },
  },
];

export default microApps;
