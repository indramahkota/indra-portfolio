/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { resolve } = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  entry: resolve(__dirname, "src/index.ts"),
  devtool: "eval-source-map",
  devServer: {
    open: true,
    host: "localhost",
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
});
