/** @format */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, "client/index.js"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  devtool: "eval-source-map",

  devServer: {
    host: "localhost",
    port: 8080,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    publicPath: "/",
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  resolve: {
    extensions: ["*", ".js", ".jsx", ".json", ".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
  ],
};
