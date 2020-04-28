const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');
const config = require('./config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const sourceMapsMode = config.productionJsSourceMap ? 'source-map' : 'none';

module.exports = merge.smart(baseWebpackConfig, {
  mode: 'production',
  devtool: sourceMapsMode,
  output: {
    filename: 'js/[name].[contenthash:8].js', // contenthash：只有模块的内容改变，才会改变hash值
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          'postcss-loader', // 注意插入的位置，webpack.prod.js也要加这一项！！！
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: true ? { map: { inline: false }} : {}
      })
    ]
  }
})
