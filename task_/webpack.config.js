var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    devServer: {
        host: 'localhost', //target host
        port: 8080,
        proxy:{
            '/api':{
                target: 'http://localhost:8081',
                changeOrigin: true,
                contentType:'application/x-www-form-urlencoded;charset=utf-8',
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    },
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        })
    ],
};