const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { HotModuleReplacementPlugin, DefinePlugin } = require("webpack");
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == "development";
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const CLIENT_ID = IS_DEV ? 'tEnmcP62ZX80rQ' : 'BSNjBV-kKsm3bA';
const URI = IS_DEV ? 'http://localhost:9000' : 'https://skillbox-reddit.herokuapp.com';

module.exports = {
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
    alias: {
      "react-dom": IS_DEV ? "@hot-loader/react-dom" : "react-dom",
    }
  },

  mode: NODE_ENV ? NODE_ENV : "development",

  entry: [
    path.resolve(__dirname, "../src/client/index.jsx"),
    "webpack-hot-middleware/client?path=http://localhost:9001/static/__webpack_hmr",
  ],

  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "client.js",
    publicPath: "/static/",
  },

  devtool: IS_DEV ? "source-map" : "",

  plugins: [
    IS_DEV ? new CleanWebpackPlugin() : null,
    new HotModuleReplacementPlugin(),
    new DefinePlugin({"process.env.CLIENT_ID": `${CLIENT_ID}`, "process.env.URI": `${URI}`}),
  ],

  module: {
    rules: [
      {
        test: /\.[tj]sx?/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader", {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
            }
          }
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpeg|jpg|gif|ico)$/i,
        loader: "file-loader",
        options: {
          outputPath: "img",
          name: IS_DEV ? "[name].[ext]" : "[name].[hash:base64:5].[ext]",
        }
      },
      {
        test: /\.svg(\?.*)?$/,
        use: ["url-loader", "svg-transform-loader"],
      },
      {
        test: /\.(woff|woff2)$/i,
        loader: "file-loader",
        options: {
          outputPath: "fonts",           
          name: IS_DEV ? "[name].[ext]" : "[name].[hash:base64:5].[ext]",
          },
      },
    ],
  },
};
