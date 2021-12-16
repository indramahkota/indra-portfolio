// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

const pwaPlugin = require('./pwa/pwa-plugin');

const webcomponents_vendor = 'node_modules/@webcomponents/webcomponentsjs';
const fileToCopy = [
  {
    from: path.resolve(`${webcomponents_vendor}/custom-elements-es5-adapter.js`),
    to: 'static/vendors',
  },
  {
    from: path.resolve(`${webcomponents_vendor}/webcomponents-loader.js`),
    to: 'static/vendors',
  }
];

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const ASSET_PATH = process.env.ASSET_PATH || '/';

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js',
    publicPath: ASSET_PATH,
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      minify: { collapseWhitespace: true, removeComments: true }
    }),
    new CopyWebpackPlugin({
      patterns: [
        ...fileToCopy,
        {
          from: path.resolve(__dirname, 'public/'),
          to: path.resolve(__dirname, 'dist/')
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif|webp|)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";

    config.entry = {
      main: path.resolve(__dirname, 'src/index.ts'),
      sw: path.resolve(__dirname, 'src/sw.ts')
    }

    config.plugins.push(new MiniCssExtractPlugin());
    config.plugins.push(new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }));

    pwaPlugin.forEach(item => {
      config.plugins.push(item);
    })
  } else {
    config.mode = "development";
    config.entry = path.resolve(__dirname, 'src/index.ts');
  }
  return config;
};
