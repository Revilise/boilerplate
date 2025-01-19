const webpack = require("webpack");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const SOURCE = "./src";
const PUBLIC = "./public";
const DIST = "./dist";

const RenderHtmlPages = (pages) => pages.map(page => (
   new HtmlWebpackPlugin({
     filename: () => {
       return `${page}.html`
     },
     template: `./${SOURCE}/pages/${page}.jsx`,
     inject: true,
     minify: {
       collapseWhitespace: false,
       keepClosingSlash: true,
       removeComments: true,
       removeRedundantAttributes: false,
       removeScriptTypeAttributes: false,
       removeStyleLinkTypeAttributes: false,
       useShortDoctype: true
     },
   })
));

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const pages = (env.PAGES || "index").split(",").map((page) => page.trim());
  const useAnalyzer = env.ANALYZER === "true";

  console.log(isProd)

  return {
    mode: argv.mode,
    entry: [
       ...pages.map((page) => `${SOURCE}/pages/${page}.jsx`)
    ],
    node: {
      __dirname: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.(pcss|css)$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "postcss-loader",
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
          type: "asset/resource",
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', ".js", ".jsx", ".pcss", ".css"],
      alias: {
        "@": path.resolve(__dirname, SOURCE),
        "@/public": path.resolve(__dirname, PUBLIC),
      }
    },
    output: {
      filename: "js/[name].bundle.js",
      path: path.resolve(__dirname, DIST),
      clean: true,
    },
    devServer: {
      open: pages.map(page => `/${page}.html`)
    },
    optimization: {
      minimize: true,
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups:  {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      }),
      new CopyPlugin({
        patterns: [
          {
            from: PUBLIC,
            to: "public"
          }
        ]
      }),
      new webpack.ProvidePlugin({
        React: 'react'
      }),
      ...RenderHtmlPages(pages),
      useAnalyzer && new BundleAnalyzerPlugin(),
    ]
  }
}
