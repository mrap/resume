const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "/"),
    },
    compress: true,
    port: 9000,
    hot: true,
    watchFiles: ["src/**/*"],
    client: {
      overlay: true,
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },
  devtool: "inline-source-map",
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    poll: 1000,
  },
};
