var usermodel = require('../models/users');
var jwt = require('jsonwebtoken');
var config = require('../../config/config');

// authenticate routers
exports.auth = function(req, res){
	console.log("users", req.body);
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
					var token = jwt.sign(user, config.secret, {expiresIn:1440});

					//return the information
					res.json({success:true, message: 'Enjoy the Token..', token: token});
				}
			}
		}
	});
};

// varify all router with token
exports.allRouters = function(req, res, next){
	var token = req.body.token || req.query.token || req.headers['x-access-token'];

	//decode token 
	if (token) {
		// verifies secret and exp
		jwt.verify(token,  config.secret, function(err, decoded){
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
};

// get all user 
exports.allUsers = function(req, res){
	usermodel.find({ }, function(err, users){
		if (err) {
			throw err;
		}else{
			res.json(users);
		}
	});
}

