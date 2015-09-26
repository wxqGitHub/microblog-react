var config = function(app) {
    // development error handler
    // will print stacktrace

    var WebpackDevServer = require('webpack-dev-server');
    var webpack = require('webpack');
    var config = require('./webpack.dev.config');
    var proxy = require('proxy-middleware');
    var port = 3002;
    app.use('/app/js', proxy('http://127.0.0.1:'+port+'/app/js'));
    var server = new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        hot: true,
        noInfo: true,
        stats: { colors: true },
        headers: { 'Access-Control-Allow-Origin': '*' }
    }).listen(port, '127.0.0.1',function(err,result) {
        if (err) {
          console.log(err);
        }
        console.log('Webpack Listening at 127.0.0.1:'+port);
     });
}


module.exports = config
