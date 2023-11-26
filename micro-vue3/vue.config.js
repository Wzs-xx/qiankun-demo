const { name } = require('./package');

module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH, //项目名
  outputDir: process.env.VUE_APP_OUTPUTDIR + process.env.VUE_APP_PUBLIC_PATH, // 打包输出文件目录
  devServer: {
    port: 40000,
    headers: {
      'Access-Control-Allow-Origin': '*', //开发时增加跨域 表示所有人都可以访问我的服务器
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把子应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
};
