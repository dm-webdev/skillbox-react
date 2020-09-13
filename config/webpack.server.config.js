const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const NODE_ENV = process.env.NODE_ENV;
// const IS_DEV = NODE_ENV == "development";

module.exports = {
  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },

mode: NODE_ENV ? NODE_ENV : "development",

  target: "node",

  entry: path.resolve(__dirname, "../src/server/server.js"),

  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "server.js",
  },

  externals: [nodeExternals()],

  optimization: {
    minimize: false,
  },

  plugins: [new CleanWebpackPlugin()],

  module: {
    rules: [
      {
        test: /\.[tj]sx?/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
                exportOnlyLocals: true,
              },
            },
          },
        ],
      },
    ],
  },
};
