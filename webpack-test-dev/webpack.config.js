const path = require("path");
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
      }
    ]
  }
};
