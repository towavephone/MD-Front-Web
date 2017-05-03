var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devTool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            './src/app.jsx'
        ],
        vendor1: ['react-dom', 'react'],
        vendor2: ['bootstrap-growl-ifightcrime']
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
            template: 'src/index.html'
        }),
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor1', 'vendor2'],
            minChunks: Infinity
        })
        // new webpack.optimize.OccurenceOrderPlugin()
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        // })
    ]
};