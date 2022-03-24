/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const { resolve } = require("path");
const { merge } = require("webpack-merge");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
      new ESBuildMinifyPlugin({
        css: true,
      }),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
          mangle: true,
          module: false,
          output: {
            comments: false,
          },
        },
        extractComments: true,
      }),
    ],
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
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
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            "imagemin-gifsicle",
            "imagemin-mozjpeg",
            "imagemin-pngquant",
            "imagemin-svgo",
          ],
        },
      },
      loader: true,
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:16].css",
      chunkFilename: "static/css/[name].[id].[contenthash:16].css",
    }),
  ],
});
