const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");
const nodeExternals = require("webpack-node-externals");
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const IS_DEV = NODE_ENV == "development";


module.exports = {
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ts", ".tsx"],
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

  plugins: IS_DEV
  ? [
      new CleanWebpackPlugin(),
      new DefinePlugin({
        "process.env.IS_DEV": JSON.stringify('development'),
        "process.env.CLIENT_ID": JSON.stringify('tEnmcP62ZX80rQ'),
        "process.env.URI": JSON.stringify('http://localhost:9000'),
        "process.env.SECRET": JSON.stringify('WdtP8Xgim-btpjaKsgi7smwRdawUHQ'),
      }),
    ]
  : [
      new CleanWebpackPlugin(),
      new DefinePlugin({
        "process.env.CLIENT_ID": JSON.stringify('BSNjBV-kKsm3bA'),
        "process.env.URI": JSON.stringify('https://skillbox-reddit.herokuapp.com'),
        "process.env.SECRET": JSON.stringify('Jd3n_CIKmzYxmSwTqmioMdLpH9bpiw'),
      }),
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
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ["css-loader"],
      },
      {
        test: /\.(png|jpeg|jpg|gif|ico)$/i,
        loader: "file-loader",
        options: {
          outputPath: "img",
          name: IS_DEV ? "[name].[ext]" : "[name].[hash:base64:5].[ext]",
        },
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
