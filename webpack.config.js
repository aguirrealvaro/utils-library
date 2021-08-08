/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCSSExtract = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const PACKAGE = require("./package.json");

const currentPath = path.join(__dirname);
const srcPath = path.resolve(__dirname, "src");

const validEnvs = ["local", "development", "production"];

module.exports = (env = {}) => {
  if (!env.environment) throw Error("The --env.environment argument is not defined.");

  if (!validEnvs.includes(env.environment))
    throw Error(`Invalid --env.environment argument, please use one of the following: ${validEnvs}`);

  const envPath = `${path.resolve(currentPath, "env", env.environment)}.env`;
  const fileEnv = dotenv.config({ path: envPath }).parsed;

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  const isLocal = env.environment === "local";
  const mode = isLocal ? "development" : "production";

  const devApiHost = dotenv.config({
    path: path.resolve(currentPath, "env", "development.env"),
  }).parsed.API_HOST;

  const commonConfig = {
    mode,
    context: currentPath,
    entry: {
      app: "./src/index.js",
    },
    output: {
      path: path.resolve(currentPath, "dist"),
      filename: "bundle.js",
      publicPath: "/",
    },
    resolve: {
      extensions: ["*", ".ts", ".tsx", ".js", ".jsx", ".json"],
      alias: {
        "@": srcPath,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.html$/,
          use: "html-loader",
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [MiniCSSExtract.loader, "css-loader"],
        },
        {
          test: /\.(png|j?g|svg|gif)?$/,
          use: "file-loader",
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, "public/index.html"),
        filename: "./index.html",
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(mode),
          VERSION: JSON.stringify(PACKAGE.version),
          ...(env["api-host"] === "dev" && {
            API_HOST: JSON.stringify(devApiHost),
          }),
        },
        ...envKeys,
      }),
      new MiniCSSExtract(),
    ],
  };

  const localConfig = {
    devServer: {
      historyApiFallback: true,
      open: true,
      port: 3000,
    },
  };

  const devConfig = {
    optimization: {
      minimize: false,
    },
  };

  const prodConfig = {
    plugins: [new OptimizeCssAssetsPlugin()],
  };

  const configs = {
    local: localConfig,
    development: devConfig,
    production: prodConfig,
  };

  return merge(commonConfig, configs[env.environment]);
};
