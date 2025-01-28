const webpack = require("webpack");
const path = require("path");
const {glob} = require("glob");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const SOURCE = "./src";
const PUBLIC = "./public";
const DIST = "./dist";

const CORE = `${SOURCE}/lib/index.js`;

const RenderHtmlPages = (pages) => pages.map(page => (
   new HtmlWebpackPlugin({
     filename: () => `${page}.html`,
     template: `./${SOURCE}/pages/${page}.jsx`,
     inject: true,
     minify: true,
   })
));

const getEntries = async (tests) => {
  const filenames = tests.map(test => glob(test));
  return (await Promise.all(filenames)).flat().map(filename => `./${filename}`);
}

const getPages = async (envPages) => {
  if (envPages === "*") {
    const filenames = await glob(`${SOURCE}/pages/**.jsx`);
    return filenames.map(filename => filename.match(/\w+(?=\.jsx)/gm)[0]);
  }

  return envPages.split(",").map(page => page.trim());
}

module.exports = async (env, argv) => {
  const isProd = argv.mode === 'production';
  const pages = await getPages(env.PAGES);
  const styles = await getEntries(["src/**/*.pcss", "src/**/*.css"]);
  const useAnalyzer = env.ANALYZER === "true";

  const ENTRY = {
    bundle: styles.concat([CORE]),
  }

  return {
    mode: argv.mode,
    entry: ENTRY,
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
          test: /\.(pcss|css|scss|sass)$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
          type: "asset/resource",
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', ".js", ".jsx", ".pcss", ".css", ".scss"],
      alias: {
        "@": path.resolve(__dirname, SOURCE),
        "@/public": path.resolve(__dirname, PUBLIC),
      }
    },
    output: {
      filename: "js/[name].js",
      path: path.resolve(__dirname, DIST),
      clean: true,
    },
    devServer: {
      open: pages.map(page => `/${page}.html`)
    },
    optimization: {
      minimizer: [
         new CssMinimizerPlugin(),
         new TerserPlugin(),
      ],
      minimize: true,
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
        filename: 'css/[name].css',
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
        React: "react",
        bootstrap: "bootstrap",
      }),
      ...RenderHtmlPages(pages),
      useAnalyzer && new BundleAnalyzerPlugin(),
    ]
  }
}
