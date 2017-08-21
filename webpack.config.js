const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry : './ex/index.js', /*ponto de entrada*/
    output : {
        path: __dirname + '/public',
        filename : './bundle.js'
    },
    devServer : {
        port: 8080,
        contentBase : './public'
    },
    plugins : [
        new ExtractTextPlugin('app.css')
    ],
    module : {
        loaders : [{
            test : /.js?$/,
            loader: 'babel-loader',
            exclude : /node_modules/,
            query : {
                presets : ['es2015'/*agora consigo usar o es2015 ex: export default class*/, 'react'/*preset do react*/],
                plugins : ['transform-object-rest-spread']/*Para o operador spread*/
            }
        }, {
            test : /.css?$/,
            loader: ExtractTextPlugin.extract("style-loader", 'css-loader')
        }]
    }
};