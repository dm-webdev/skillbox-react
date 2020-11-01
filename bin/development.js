const webpack = require("webpack");
const nodemon = require("nodemon");
const path = require("path");
const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const [webpackClientConfig, webpackServerConfig] = require("../webpack.config");

const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig);

hmrServer.use(webpackDevMiddleware(clientCompiler, {
  publicPath: webpackClientConfig.output.publicPath,
  serverSideRender: true,
  noInfo: true,
  watchOption: {
    ignore: /dist/,
  },
  writeToDisk: true,
  stats: "errors-only",
}));

hmrServer.use(webpackHotMiddleware(clientCompiler, {
  path: "/static/__webpack_hmr",
}))

hmrServer.listen(9001, () => {
  console.log("HMR server started on http://localhost:9001");
});


const compiler = webpack(webpackServerConfig);

compiler.run((error) => {
  if (error) {
    console.log("Compilation failed: ", error);
  }

  compiler.watch({}, (error) => {
    if (error) {
      console.log("Compilation failed: ", error);
    }

    console.log("Compilation was successfully");
  });
});

nodemon({
  script: path.resolve(__dirname, "../dist/server/server.js"),
  watch: [
    path.resolve(__dirname, "../dist/server"),
    path.resolve(__dirname, "../dist/client"),
  ]
})
