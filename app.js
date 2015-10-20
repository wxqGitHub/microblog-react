var
    express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    MongoStore = require('connect-mongo')(session),
    settings = require('./settings');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
    secret: settings.cookieSecret,
    store: new MongoStore({
        db: settings.db
    }),
    resave: false,
    saveUninitialized: true,
}));





if (app.get('env') === 'development') {
    app.use(express.static(path.join(__dirname, 'app')));
    require('./webpack.server')(app);
}else {
    app.use(express.static(path.join(__dirname, '/')));
}

require('./routes/routes')(app);

var port = 3000;

app.set('port', port);

app.listen(port);

console.log('run server port: 3000')
