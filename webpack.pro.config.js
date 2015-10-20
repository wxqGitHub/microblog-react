
var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'publics');
var excludeFromStats = [
    /node_modules[\\\/]/
];

module.exports = {
    entry: [
      './app/main'
    ],
    output: {
        path: path.join(__dirname, 'app/builder'),
        filename: '[name].js',
        publicPath: "/app/builder/"
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module : {
      loaders: [
        { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']},
        {
          test: /\.sass$/,
          loader: 'style!css!sass?indentedSyntax'
        }
      ]
    }
};
