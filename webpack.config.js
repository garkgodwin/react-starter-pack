const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // mode - will be development or production
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  }, // entry - files that we are gonna start off with
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  }, // output - where we are gonna put things
  devtool: "inline-source-map", // source mapping to know where the error will come from
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000, // default is 8080
    open: true, // open default browser
    hot: true, // hot reload
  }, // settings of our dev server
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
        type: "asset/resource",
      },
    ],
  },
  // module - are loaders to handle other files

  plugins: [
    new HtmlWebpackPlugin({
      title: "React Starter Pack",
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"),
      inject: "body",
    }),
  ], // plugins - do things that loaders can't do
};
