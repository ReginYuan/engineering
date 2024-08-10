const path = require('path');
const webpack = require('webpack');
// 该插件可以将js打包生成新的html文件
const HtmlWbpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        bundle: './src/index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                },
                generator: {
                    filename: 'images/[name].[hash:6][ext]'
                }
            }
        ]
    },
    plugins: [
        // 生成新的html文件
        new HtmlWbpackPlugin({
            filename: 'index.html', //模板的名称
            template: './src/index.html' //模板的地址
        }),
        new HtmlWbpackPlugin({
            filename: 'login.html', //模板的名称
            template: './src/login.html' //模板的地址
        }),
        // 将符号映射到库
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
        })
    ]
};
