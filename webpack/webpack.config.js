const path = require('path') // commonJS import
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = { // commonJS export
  entry: {
    main: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack template',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: [/\.jpg$/, /\.png$/, /\.gif$/],
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        type: 'asset/inline'
      }
    ]
  }
}