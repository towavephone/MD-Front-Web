var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        app: [
            './src/app.jsx'
        ],
        vendor1: ['react-dom', 'react']
    },
    resolve: {extensions: ['', '.js', '.jsx']},
    output: {
        path: 'build/',
        filename: '[name].[chunkhash].js',
        publicPath: 'build/',
        chunkFilename: '[name].chunk.[chunkhash].js'
    },
    module: {
        preLoaders: [{
            test: /\.(jsx|js)?$/,
            exclude: [/node_modules/, /build/],
            loader: 'eslint-loader'
        }],
        loaders: [{
            test: /\.(jsx|js)?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/, /build/]
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url-loader',
            query: {
                limit: 10240, // 10KB 以下使用 base64
                name: 'img/[name]-[hash:6].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)$/,
            loader: 'url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]'
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({React: 'react'}),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/index.prod.html'
        }),
        // 打包的时候删除重复或者相似的文件
        new webpack.optimize.DedupePlugin(),
        // 压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false}
        }),
        // // 根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小，该模块推荐使用
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor1'],
            minChunks: Infinity
        }),
        // 优化代码，合并相似部分，提取公共部分
        new webpack.optimize.AggressiveMergingPlugin(),
        // 把多个小模块进行合并，以减少文件的大小
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 30000}),
        // 抽离css
        new ExtractTextPlugin('[name].[contenthash:6].css', {allChunks: false})
    ]
};