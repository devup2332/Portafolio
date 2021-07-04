const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/index.tsx"),

  module: {
    rules: [
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    host: "client",
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      minify: true,
      template: path.resolve(__dirname, "../src/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};
