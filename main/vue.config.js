module.exports = {
  publicPath: '/', //项目名
  outputDir: process.env.VUE_APP_OUTPUTDIR + process.env.VUE_APP_PUBLIC_PATH, // 打包输出文件目录
  devServer: {
    port: 8000,
    headers: {
      // 重点1: 允许跨域访问子应用页面
      'Access-Control-Allow-Origin': '*',
    },
  },
};
