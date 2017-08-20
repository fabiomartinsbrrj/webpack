const webpack = require('webpack');

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
    module : {
        loaders : [{
            test : /.js?$/,
            loader: 'babel-loader',
            exclude : /node_modules/,
            query : {
                presets : ['es2015'],/*agora consigo usar o es2015 ex: export default class*/
                plugins : ['transform-object-rest-spread']/*Para o operador spread*/
            }
        }]
    }
};