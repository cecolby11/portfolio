const path = require ('path');
const webpack = require("webpack");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // This is the entry point or start of our react applicaton
  entry: {
    bundle: [ path.join(__dirname, './app/app.js')]
  },

  // The plain compiled JavaScript will be output into this file
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js",
  },

  devServer: {
    compress: true, // enable gzip compression (faster compression).
    historyApiFallback: true, // enable for react router
    stats: "minimal", // shows errors
    port: 5000
  },

  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel-loader",
        query: {
          // These are the specific transformations we'll be using.
          presets: ["env", "react", "es2015"]
        }
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({ // Will create a development evironment, but will pull itself out of production bundle.js
      NODE_ENV: "development"
    }),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, './public/dist/index.html')
    })
  ],
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map"
};
