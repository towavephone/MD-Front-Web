var webpack = require('webpack'),
  config = require('./webpack.base.conf'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
  SOURCE_MAP = true; // 大多数情况下用不到
  // SOURCE_MAP = false;

config.output.filename = '[name].js';
config.output.chunkFilename = '[id].js';

config.devtool = SOURCE_MAP ? 'eval-source-map' : false;

// add hot-reload related code to entry chunk
config.entry.app = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client?reload=true',
  'webpack/hot/only-dev-server',
  config.entry.app
];

config.output.publicPath = '/';

// 开发环境下直接内嵌 CSS 以支持热替换
config.module.loaders.push({
  test: /\.css$/,
  loader: 'style!css'
}, {
  test: /\.less$/,
  loader: 'style!css!less'
}, {
  test: /\.scss$/,
  loader: 'style!css!sass'
});

config.plugins.push(
  // 根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
  new webpack.optimize.OccurenceOrderPlugin(),
  // 模块热替换,如果不在dev-server模式下，需要记录数据，recordPath，生成每个模块的热更新模块
  new webpack.HotModuleReplacementPlugin(),
  // 报错但不退出webpack进程
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('[name].css'),
  // 生成html
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: config.commonPath.indexHTML,
    chunksSortMode: 'none'
  }),
  new BrowserSyncPlugin({
    host: '127.0.0.1',
    port: 9090,
    proxy: 'http://127.0.0.1:9000/',
    logConnections: false,
    notify: false
  }, {
    reload: false
  })
);

module.exports = config;
