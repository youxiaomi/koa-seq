var ExtractTextPlugin = require('extract-text-webpack-plugin');

var path = require('path')
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: {
    app: ['./src/main.js'],
    vendor: ['vue','vuex']
  },
  // devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, '../public/static'),
    publicPath: '/static/',
    filename: 'js/[name].[chunkhash].js',
    chunkFilename:'js/[name].[chunkhash].js'
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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        // include: [path.resolve(__dirname, '/src')]
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true //css压缩
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
    ]

  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, '../public/static')]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    }),
    // new UglifyJSPlugin({
    //   sourceMap: false
    // }),
    new ExtractTextPlugin('styles.css'),

    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require', 'module', '_']
      },
      compress: {
        warnings: false
      },
      output: {
        comments: false,
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
  ],
}


