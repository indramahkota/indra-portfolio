/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { resolve } = require("path");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LicensePlugin = require("webpack-license-plugin");
const common = require("./webpack.common");
const pwaPlugin = require("./pwa/pwa-plugin");

module.exports = merge(common, {
  mode: "production",
  entry: {
    main: resolve(__dirname, "src/index.ts"),
    sw: resolve(__dirname, "src/sw.ts"),
  },
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: (fileData) => {
            // The "fileData" argument contains object with "filename", "basename", "query" and "hash"
            return `${fileData.filename}.LICENSE.txt${fileData.query}`;
          },
          banner: (licenseFile) => {
            return `License information can be found in ${licenseFile}`;
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
  plugins: [
    ...pwaPlugin,
    new LicensePlugin(),
    new ImageMinimizerPlugin({
      minimizer: [
        {
          // `sharp` will handle all bitmap formats (JPG, PNG, GIF, ...)
          implementation: ImageMinimizerPlugin.sharpMinify,

          // exclude SVG if implementation support it. Not required for `sharp`.
          // filter: (source, sourcePath) => !(/\.(svg)$/i.test(sourcePath)),

          options: {
            encodeOptions: {
              // Your options for `sharp`
              // https://sharp.pixelplumbing.com/api-output
            },
          },
        },
        {
          // `svgo` will handle vector images (SVG)
          implementation: ImageMinimizerPlugin.svgoMinify,
          options: {
            encodeOptions: {
              // Pass over SVGs multiple times to ensure all optimizations are applied. False by default
              multipass: true,
              plugins: [
                // set of built-in plugins enabled by default
                // see: https://github.com/svg/svgo#default-preset
                "preset-default",
              ],
            },
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:16].css",
      chunkFilename: "static/css/[name].[id].[contenthash:16].css",
    }),
  ],
});
