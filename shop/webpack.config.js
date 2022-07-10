const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode : 'development',
    entry : {
       main : './src/index.js',
       admin : path.resolve(__dirname, './src/scripts/admin.js'), //'./src/scripts/example.js',
       second : path.resolve(__dirname,'./src/pages/second.html')
    },
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'),
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
            template : path.resolve(__dirname,'./src/pages/second.html'),
            filename: 'second.html',
            chunks: ["second"]
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