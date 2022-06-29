const path = require('path')
const HtmlWebpackPlaguin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode : 'development',
    entry : './src/index.js',

    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    plugins : [
        new HtmlWebpackPlaguin({
            template : './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules : [
             {
                test: /\.css$/,
                use : ['style-loader','css-loader']
            },
             {
                test: /\.s[ac]ss$/,
                use : ['style-loader','css-loader','sass-loader']
            } 
        ]
    }
}