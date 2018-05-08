const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    sourceMapFilename: "bundle.js.map"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        exclude: /node_modules/
      }]
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    poll: 700,
    ignored: [path.resolve(__dirname, "dist"), path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "src/js/game/assets/**/*"), path.resolve(__dirname, "./**/**/**/**/**/*.png")]
  },
  mode: "development"
};
