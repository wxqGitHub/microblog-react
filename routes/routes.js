
var crypto = require('crypto');
var User = require('../models/user')
var bodyParser = require('body-parser');

function routes(app){

    app.get('/', function(req, res, next) {
        var name = req.session.user ? req.session.user.name : null;
        res.render('layout', {
            title: 'microblog' ,
            session : name,
        });
    });

    app.get('/logout', function(req, res){
        req.session.destroy();
    	res.redirect('/');
    });

    app.get('/login', function(req, res){
        var md5 = crypto.createHash('md5');
        var password = md5.update(req.query.password).digest('base64');

        User.get(req.query.username, function(err, user) {
            if (!user) {
                res.json({code: 30011, state : 'warning',  messages: '用户不存在'});
                return
            }

            if (user.password != password) {
                res.json({code: 30012, state : 'warning',  messages: '密码错误'});
                return
            }

            req.session.user = user;
            return res.json({code: 0,  state : 'success',  messages: 'login success', userName: user.name});
            //res.redirect('/');
        });
    });

    app.post("/reg", function(req, res){

        if(req.body['passwordrepeat'] != req.body['password']){
            res.json({code: 3001, state : 'warning',  messages: '两次输入的密码不一致'});
            return
        }
        var md5 = crypto.createHash('md5');
        var password = md5.update(req.body.password).digest('base64');
        var newUser = new User({
            name : req.body.username,
            password : password
        });

        //check user
        User.get(newUser.name, function(err, user){
            if(user){
                err = 'username already existe.';
                res.json({code: 3002, state : 'warning',  messages: err});
                return
            }
            if(err){
                res.json({code: 3003, state : 'warning', messages: err });
                return
            }
            //save user
            newUser.save(function(err){
                if(err){
                    res.json({code: 3004, state : 'warning', messages:err });
                    return
                }

                req.session.user = newUser;
                var message = 'regist success!' ;
                return res.json({code: 0,  state : 'success',  messages: message, userName: newUser.name});
                res.redirect('/');
            });
        });
    })

}


module.exports = routes
