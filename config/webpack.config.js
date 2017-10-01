const path = require('path');
var webpack = require('webpack')


module.exports = {
  entry: './view/index.js',
  output: {
    path: path.resolve(__dirname, './../public/static'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[chunkhash].min.js'
  },
  devServer: {
     contentBase: './../public/static'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        loader: 'vue-loader',
        test: /\.vue$/,
        options: {
          loaders: {

          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js",
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "manifest",
    //   minChunks: Infinity
    // }),
  ]

};