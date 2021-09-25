// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : "style-loader";

const webcomponents_vendor = 'node_modules/@webcomponents/webcomponentsjs';
const fileToCopy = [
  /* {
    from: path.resolve(`${webcomponents_vendor}/custom-elements-es5-adapter.js`),
    to: 'static/vendors',
    flatten: true,
    transform: fileContent => {
      return minify(fileContent.toString()).code;
    }
  }, */
  {
    from: path.resolve(`${webcomponents_vendor}/webcomponents-loader.js`),
    to: 'static/vendors',
    /* flatten: true,
    transform: fileContent => {
      return minify(fileContent.toString()).code;
    } */
  }
];

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      minify: { collapseWhitespace: true, removeComments: true }
    }),
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
  config.plugins.push(
    new CopyWebpackPlugin({
      patterns: [
        ...fileToCopy,
        {
          from: path.resolve(__dirname, 'public/'),
          to: path.resolve(__dirname, 'dist/')
        }
      ]
    }),
  );

  if (isProduction) {
    config.mode = "production";

    config.plugins.push(new MiniCssExtractPlugin());

    /* config.plugins.push(new WorkboxWebpackPlugin.GenerateSW()); */
  } else {
    config.mode = "development";
  }
  return config;
};
