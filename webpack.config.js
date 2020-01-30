const path = require("path");

module.exports = {
  entry: "./frontend/prepper.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loaders: ["babel-loader", "style-loader", "css-loader?modules"],
        query: {
          presets: ["@babel/env", "@babel/react"]
        }
      }
    ]
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
