/**
 * webpack 是基于 node 实现的
 * 当我们执行 webpack 其实本质上运行的node代码
 * 所以这里的配置文件 webpack.config.js 是 node 代码文件
 * */
const path = require('path');

// 导出的就是一个对象，这个对象就是webpack命令执行过程中使用到的配置
module.exports = {
    // 编译模式
    mode: "development",
    // 编译入口文件
    // entry: "./src/index.js",
    entry: {
        // "index": "./src/index.js",
        // "user": "./src/user.js",
        // "txt": "./src/index-txt.js",
        // "md": "./src/index-md.js",
        "file": "./src/index-file.js"
    },
    // 出口
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },

    // 模块配置
    // loader 配置
    module: {
        // 非js模块的加载规则和需要调用的loader处理器
        rules: [
            // 每一个对象就是一个处理规则
            {
                // 被加载的模块特征：正则，一般通过被加载的模块文件的后缀来进行判断
                test: /\.txt$/,
                // 如果加载的模块文件满足上面特征，则调用use中设定的loader进行处理
                use: 'raw-loader'
            },

            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader"
                    }
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: "./images",
                        publicPath: "/public/images"
                    }
                }
            }
        ]
    }
};

// /static/1.png => /public/1.png
//
// koaStaticCache({
//     dir: './static',
//     prefix: '/public'
// })