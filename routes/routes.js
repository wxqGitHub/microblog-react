



function routes(app){
    app.get('/', function(req, res, next) {
      res.render('index', { title: 'Express' });
    });
}

module.exports = routes
