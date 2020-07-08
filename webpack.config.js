const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const resolve = dir => path.join(__dirname, dir)
module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].bundle.js",
    },

    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 300000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 500000000, // 整数类型（以字节为单位）
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //创建一个在内存中生成的html页面的插件
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.html",
        }),
        new VueLoaderPlugin(),
    ],
    // chainWebpack: config => {
    //     config.resolve.alias.set('@', resolve('src')) // key,value自行定义
    // },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            'src': path.resolve(__dirname, 'src'),
        }
    },
    module: {
        // 关于模块配置
        rules: [
            // 模块规则（配置 loader、解析器等选项）
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            },
            {
                test: /\.(jsx|js)?$/,
                loader: "babel-loader",
                options: {
                    presets: ["es2015"],
                },
            },
            {
                test: /\.(scss|css)$/,
                use: ["vue-style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        esModule: false,
                        limit: 88,
                        name: 'imgs/[name].[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.mp3$/,
                loader: 'url-loader',
                options: {
                    esModule: false,
                    limit: 88,
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
        ],
    },
};