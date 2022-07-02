const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode : 'development',
    entry : './src/index.js',
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    plugins : [
        new HtmlWebpackPlugin({
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
            } ,
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
              },
        ]
    }
}