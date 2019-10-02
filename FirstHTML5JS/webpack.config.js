const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');

module.exports = {
	output : {
		path : path.join(__dirname,"/dist"),
		filename: "index_bundle.js"
	},
	entry : "./src/index.js",
  //devtool: 'inline-source-map',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

 plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html"
    }),
    new webpack.SourceMapDevToolPlugin({
      filename: '*.js.map',
      exclude: ['vendor.js']
    })
  ]

};


