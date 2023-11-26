const { name } = require('./package');

const path = require('path');
const paths = require('react-scripts/config/paths');
// 修改打包文件路径为 web 工程的 resources 目录
paths.appBuild = path.join(path.dirname(paths.appBuild), '../dist/subapp/micro-react');

module.exports = {
  webpack: config => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.globalObject = 'window';
    config.output.publicPath = process.env.NODE_ENV === 'development' ? 'http://localhost:20000/' : '/subapp/micro-react/';
    return config;
  },
  devServer: _ => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.watchContentBase = false;
    config.liveReload = false;

    return config;
  },
};
