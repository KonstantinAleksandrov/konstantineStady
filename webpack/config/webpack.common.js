const paths = require('./paths.js') // commonJS import
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = { // commonJS export
  entry: {
    main: paths.entry
  },
  output: {
    path: paths.dist,
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack template',
      template: paths.html,
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
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}