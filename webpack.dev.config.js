
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var buildPath = path.resolve(__dirname, 'publics');
var excludeFromStats = [
    /node_modules[\\\/]/
];


module.exports = {
    entry: [
      'webpack-dev-server/client?http://127.0.0.1:3002',
      "webpack/hot/dev-server",
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
    },
    devServer: {
        stats: {
            exclude: excludeFromStats,
            colors: true
        }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ]
};
