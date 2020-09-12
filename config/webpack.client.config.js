const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == "development";
// const IS_PROD = NODE_ENV == 'production';

module.exports = {
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
  },

  mode: NODE_ENV ? NODE_ENV : "development",

  entry: path.resolve(__dirname, "../src/client/index.jsx"),

  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "client.js",
  },

  devtool: IS_DEV ? "source-map" : "",

  plugins: [new CleanWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.[tj]sx?/,
        loader: "ts-loader",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
