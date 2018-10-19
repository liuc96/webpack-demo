const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: "./src/index.js",
    another: "./src/another-module.js"
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Code Splitting"
    })
  ],
  optimization: {
    runtimeChunk: {
      name: "common"
    },
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "lodash",
          chunks: "all"
        }
      }
    }
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
