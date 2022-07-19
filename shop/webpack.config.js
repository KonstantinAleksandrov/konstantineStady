const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode : 'development',
    entry : {
       main : './src/index.js',
       admin : path.resolve(__dirname, './src/scripts/admin.js'), //'./src/scripts/example.js',
       card : path.resolve(__dirname,'./src/scripts/card.js')
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, './dist'),
            watch: true
        },
        open: true,
        compress: true,
        hot: true,
        port: 3000,
        magicHtml: true
    },   
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : '[name].bundle.js'
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html',
            chunks: ["main"]
        }),
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname, './src/pages/admin.html'),
            filename: 'admin.html',
            chunks: ["admin"]
        }),
        new HtmlWebpackPlugin({
            template : path.resolve(__dirname,'./src/pages/card.html'),
            filename: 'card.html',
            chunks: ["card"]
        }),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.BACKEND_PORT': 901,
        })
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