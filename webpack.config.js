const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    resolve: {
        // 设置别名
        alias: {
            '@': resolve('src') // 这样配置后 @ 可以指向 src 目录
        }
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
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        // 关于模块配置
        rules: [
            // 模块规则（配置 loader、解析器等选项）
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
                use: ["file-loader"],
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
        ],
    },
};