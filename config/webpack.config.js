// const path = require('path');
// var webpack = require('webpack')
//
// var HtmlWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//   entry: './src/main.js',
//   output: {
//     path: path.resolve(__dirname, './../public/static'),
//     filename: 'js/[name].bundle.js',
//     chunkFilename: 'js/[name].bundle.js',
//   },
//   devServer: {
//      contentBase: './../public/static'
//   },
//   resolve: {
//     alias: {
//       'vue$': 'vue/dist/vue.common.js'
//     }
//   },
//   module: {
//     rules: [
//       {
//         loader: 'vue-loader',
//         test: /\.vue$/,
//         options: {
//           loaders: {
//
//           }
//         }
//       }
//     ]
//   },
//   plugins: [
//     // new webpack.optimize.CommonsChunkPlugin({
//     //   name: "commons",
//     //   filename: "commons.js",
//     // }),
//     new HtmlWebpackPlugin({
//       filename: 'index.html',
//       template: './public/index.html',
//       inject: true
//     })
//
//     // new webpack.optimize.CommonsChunkPlugin({
//     //   name: "manifest",
//     //   minChunks: Infinity
//     // }),
//   ]
//
// };

// var plugins = [
//   new webpack.optimize.CommonsChunkPlugin({
//     name: "vendor",//和上面配置的入口对应
//     //filename: "commonFun.js",//导出的文件的名称
//     minChunks: 2,
//   }),
// ]


var path = require('path')
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: {
    app: ['./src/main.js'],
    // vendor: ['vue','vuex']
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../public/static'),
    publicPath: '/static/',
    filename: 'js/[name].js',
    chunkFilename:'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: 'babel-loader'
      //   // include: [path.resolve(__dirname, '/src')]
      // },
    ]

  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    }),
    // new UglifyJSPlugin({
    //   sourceMap: false
    // })

    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: {
    //     except: ['$super', '$', 'exports', 'require', 'module', '_']
    //   },
    //   compress: {
    //     warnings: false
    //   },
    //   output: {
    //     comments: false,
    //   }
    // })
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "manifest",
    //   minChunks: Infinity
    // }),
  ],
}


