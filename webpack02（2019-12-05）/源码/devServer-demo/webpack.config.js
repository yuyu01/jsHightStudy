const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',

    devtool: 'source-map',

    entry: {
        'index': './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "My App",
            filename: "index.html",
            template: "./html/template.html"
        })
    ],


    devServer: {
        // 生成的虚拟目录路径
        contentBase: "./dist",
        // 自动开启浏览器
        open: true,
        // 端口
        port: 8081,

        // 开启热更新
        hot: true,

        // 即使 HMR 不生效，也不去刷新整个页面(选择开启)
        hotOnly: true,

        // 我们的每次请求都会被devServer拦截，然后如同webpack的中的loader，如果请求的url满足proxy中的某个规则的话，则把这个请求转发到另外一个服务器上
        proxy: {
            // http://localhost:8081/api/getData
            '/api': {
                // 那么把原始请求中的域转成target的域
                target: 'http://localhost:7777',
                // 把请求路径中的 /api 去掉
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};