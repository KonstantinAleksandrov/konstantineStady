const path = require('path') // commonJS import

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  dist: path.resolve(__dirname, '../dist'),
  html: path.resolve(__dirname, '../src/template.html'),
  pageGen: (pageName) => path.resolve(__dirname, `../src/${pageName}.html`),
  jsGen: (jsName) => path.resolve(__dirname, `../src/${jsName}.js`)
}