"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == 'development';
// const IS_PROD = NODE_ENV == 'production';

module.exports = {
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
  },

  mode: NODE_ENV ? NODE_ENV : "development",

  entry: path.resolve(__dirname, "src/index.jsx"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    hot: IS_DEV,
    port: 9000,
  },

  devtool: IS_DEV ? 'source-map' : '',

  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "dist/index.html"),
      template: path.resolve(__dirname, "index.html"),
      scriptLoading: "defer",
      minify: "production",
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.[tj]sx?/,
        loader: "ts-loader",
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};
