var express = require('express');
var apiRouter = express.Router();
var config = require('../../config/config');
var usermodel = require('../models/users');
var jwt = require('jsonwebtoken');
// config secret 
// create authentication route /users/auth
apiRouter.post('/auth', function(req, res){
	// find the user
	usermodel.findOne({name: req.body.name}, function(err, user){
		if (err) {
			throw err;
		}else{

			if (!user) {
				res.json({success:false, message: 'Auth failed. User Not found.'});
			}else if(user){
				// check for password
				if (user.password !== req.body.password) {
					res.json({success:false, message: 'Auth failed. Worng Password.'});
				}else{
					// if user is found and correct password.
					// create web token
					var app = require('.././app');
					var token = jwt.sign(user, app.get('superSecret'), {expiresIn:1440});

					//return the information
					res.json({success:true, message: 'Enjoy the Token..', token: token});
				}
			}
		}
	});
});

// route middeleware to varify token
apiRouter.use(function(req, res, next){
	// check header or url parameters or post parameters for token
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	//decode token 
	if (token) {
		// verifies secret and exp
		var app = require('.././app');
		jwt.verify(token,  app.get('superSecret'), function(err, decoded){
			if (err) {
				res.json({success: false, message: 'Failed to authenticate token'});
			}else{
				// every thing is good. save to request for use in other route 
				req.decoded = decoded;
				next();
			}
		});
	}else{
		// if there is no token, return a error
		return res.status(403).send({
			success: false,
			message: 'No token provide'
		});
	}
});

apiRouter.get('/alluser', function(req, res){
	usermodel.find({ }, function(err, users){
		if (err) {
			throw err;
		}else{
			res.json(users);
		}
	});
});

apiRouter.get('/', function(req, res){
	res.send('respond with a resource');
});

module.exports = apiRouter;