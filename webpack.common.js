/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const webcomponents_vendor = "node_modules/@webcomponents/webcomponentsjs";
const fileToCopy = [
  {
    from: resolve(`${webcomponents_vendor}/custom-elements-es5-adapter.js`),
    to: "static/vendors",
  },
  {
    from: resolve(`${webcomponents_vendor}/webcomponents-loader.js`),
    to: "static/vendors",
  },
];

const PUBLIC_PATH = process.env.PUBLIC_PATH || "/";

module.exports = {
  output: {
    path: resolve(__dirname, "dist"),
    filename: "static/js/[contenthash:16].js",
    publicPath: PUBLIC_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        type: "asset",
        generator: {
          filename: (pathData) => {
            let filename = '[name][width][height].[contenthash:8][ext]';
            return filename;
          }
        }
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()], //using for simplify import
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve(__dirname, "src/index.html"),
      minify: {collapseWhitespace: true, removeComments: true},
    }),
    new CopyWebpackPlugin({
      patterns: [
        ...fileToCopy,
        {
          from: resolve(__dirname, "public"),
          to: resolve(__dirname, "dist"),
        },
      ],
    }),
  ],
};
