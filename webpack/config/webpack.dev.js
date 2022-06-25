const paths = require('./paths.js') // commonJS import
const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common,{ // commonJS export
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: paths.dist,
    open: true,
    compress: true,
    hot: true,
    port: 3000
  }
})