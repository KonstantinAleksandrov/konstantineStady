const paths = require('./paths.js') // commonJS import
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPageNames = ["example","second"]

const someHtmlWebpackPlugins = htmlPageNames.map(pageName => {
  return new HtmlWebpackPlugin({
    title: pageName,
    template: paths.pageGen(pageName),
    filename: `${pageName}.html`,
    //excludeChunks: [pageName] // вместе с main js
    chunks: [pageName] // без main js
  })
})

module.exports = { // commonJS export
  entry: {
    main: paths.entry, // http://localhost:3000
    example: paths.jsGen("example"), // http://localhost:3000/example.html
    second: paths.jsGen("second") // http://localhost:3000/second.html
  },
  output: {
    path: paths.dist,
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack template',
      template: paths.html,
      filename: 'index.html',
      chunks: ["main"]
    })
  ].concat(someHtmlWebpackPlugins),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: [/\.jpg$/, /\.png$/, /\.gif$/],
        type: 'asset/resource',
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        type: 'asset/inline',
        use: ['file-loader']
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