var webpack = require('webpack');
var path = require('path');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var assetsPluginInstance = new AssetsPlugin();
var fs = require('fs');
var node_modules = path.resolve(__dirname, 'node_modules');

function makeConfig (options) {
    options = options || {};
    var debug = options.debug !== undefined ? options.debug : true;

    var config = [{
        plugins: [
            assetsPluginInstance,
            new webpack.optimize.UglifyJsPlugin({minimize: true}),
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor1', 'vendor2', 'vendor3', 'vendor4'],
                minChunks: Infinity
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ],
        entry: {
            index: './src/app.jsx',
            vendor1: ['bootstrap', 'bootstrap-growl-ifightcrime'],
            vendor2: ['jquery', 'react-dom', 'react'],
            vendor3: ['dist/js/owl.carousel.min.js', 'dist/js/jquery.countTo.js'],
            vendor4: ['dist/js/jquery.easing.1.3.js', 'dist/js/jquery.waypoints.min.js'],
            vendor5: []
        },
        output: {
            path: path.join(__dirname, 'dist/dist'),
            publicPath: '/dist/',
            filename: '[name].[chunkhash].js',
            // filename: '[name].js',
            chunkFilename: '[name].js'
        },
        module: {
            loaders: [{
                // tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }, {
                test: /\.scss$/,
                // loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[local]'
                // loader: ExtractTextPlugin.extract("style", "css", "sass")
                loader: 'style-loader!css-loader!sass-loader'
                    // loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.gif$/,
                loader: 'url-loader?mimetype=image/png'
            }, {
                test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
                loader: 'url-loader?mimetype=application/font-woff'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
                loader: 'file-loader?name=[name].[ext]'
            }]
        },
        externals: {
            // don't bundle the 'react' npm package with our bundle.js
            // but get it from a global 'React' variable
            // 'react': 'React',
            // 'react-dom': 'ReactDOM',
            'bootstrap': 'bootstrap'
            // "react-highcharts/dist/bundle/highcharts": "abc",
            // "react-bootstrap": "123",
            // "react-widgets": "ddd",
            // "jquery": "jquery"
        },
        resolve: {
            root: path.resolve(__dirname),
            extensions: ['', '.js', '.jsx']
        },
        debugger: 'True'
    }, {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({minimize: true})
        ],
        entry: 'page.jsx',
        target: 'node',
        output: {
            path: path.join(__dirname, 'server'),
            filename: 'page.generated.js',
            libraryTarget: 'commonjs2'
        },
        module: {
            loaders: [{
                // tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }, {
                test: /\.scss$/,
                // loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[local]'
                // loader: ExtractTextPlugin.extract("style", "css", "sass")
                loader: 'css-loader!sass-loader'
                    // loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }, {
                test: /\.css$/,
                loader: 'css-loader'
            }, {
                test: /\.less$/,
                loader: 'css-loader!less-loader'
            }, {
                test: /\.gif$/,
                loader: 'url-loader?mimetype=image/png'
            }, {
                test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
                loader: 'url-loader?mimetype=application/font-woff'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
                loader: 'file-loader?name=[name].[ext]'
            }]
        },
        externals: {
            // don't bundle the 'react' npm package with our bundle.js
            // but get it from a global 'React' variable
            // 'react': 'React',
            // 'react-dom': 'ReactDOM',
            'bootstrap': 'bootstrap',
            'superagent': './fake-highchart',
            'redis': 'redis',
            'react': 'react',
            'express': 'express',
            'superagent': 'superagent',
            'bluebird': 'bluebird',
            'async': 'async',
            'react-highcharts/dist/bundle/highcharts': './fake-highchart',
            // "react-highcharts/dist/bundle/highcharts": "abc",
            // "react-bootstrap": "123",
            // "react-widgets": "ddd",
            'jquery': 'jquery'
        },
        resolve: {
            root: path.resolve(__dirname),
            extensions: ['', '.js', '.jsx']
        },
        debugger: 'True'
    }];

    addHtmlConf(config[0]);
    // config[0].devtool = '#source-map'
    return config[0];
}

function addHtmlConf (config) {
    var pageDir = path.resolve(__dirname, './template');
    var names = fs.readdirSync(pageDir);
    var map = {};

    names.forEach(function (filename) {
        var m = filename.match(/index.html$/);
        if (m) {
            var conf = {
                template: './template/' + filename,
                filename: filename
            };

            if (m in config.entry) {
                conf.inject = 'body';
                conf.chunks = ['common', m];
            } else {
                conf.inject = 'false';
            }

            config.plugins.push(new HtmlWebpackPlugin(conf));
        }
    });
}
module.exports = makeConfig({debug: true});

module.exports = {
    entry: {
        app: [
            './src/app.jsx',
            './dist/js/main.js'
        ],
        vendors: ['react']
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
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(png|jpe?g|gif|svg)$/,
            loader: 'url',
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
        new webpack.ProvidePlugin({'React': 'react'}),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: 'src/index.html',
            chunks: ['app']
        })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {warnings: false},
        //     output: {comments: false}
        // })
        // // css抽取
        // new extractTextPlugin('[name].css'),

        // 提供公共代码
        // new webpack.optimize.CommonsChunkPlugin('common.js') // 默认会把所有入口节点的公共代码提取出来,生成一个common.js
    ]
};