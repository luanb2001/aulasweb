const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const mode = env.production ? "production" : "development";

  return {
    mode: mode,
    entry: {
      app: "./src/js/index.js",
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            MiniCssExtractPlugin.loader, 
            "css-loader", 
            "sass-loader"
          ],
        },
      ],      
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "index.html"
      }),
      new MiniCssExtractPlugin()
  ]
  };
};
