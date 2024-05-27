const path = require("path");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js", //入口文件
  output: {
    path: path.resolve(__dirname, "./dist"), //打包输出文件夹
    filename: "bundle.js" //打包输出问价名称
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.imooc/,
        use: [path.resolve(__dirname, "./loader/imooc-loader.js")]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "代码版权为reginyuan所有"
    })
  ]
};
