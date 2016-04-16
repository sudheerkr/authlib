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
					var token = jwt.sign(user, app.get('superSecret'), {expiresIn:144045});

					//return the information
					res.json({success:true, message: 'Enjoy the Token..', token: token});
				}
			}
		}
	});
});

module.exports = apiRouter;