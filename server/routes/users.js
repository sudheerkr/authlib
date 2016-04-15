var express = require('express');
var config = require('../../config/config');
var app = express();
app.set('superSecret', config.secret);
var jwt = require('jsonwebtoken');

var router = express.Router();
var usermodel = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/alluser', function(req, res){
	usermodel.find({ }, function(err, users){
		if (err) {
			throw err;
		}else{
			res.json(users);
		}
	});
});

// create authentication route /users/auth
router.post('/auth', function(req, res){
	// find the user
	console.log({name: req.body.name});
	usermodel.find({name: req.body.name}, function(err, user){
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
					var token = jwt.sign(user, app.get('superSecret'), {expiresIn:144045});

					//return the information
					res.json({success:true, message: 'Enjoy the Token..', token: token});
				}
			}
		}
	});
});



module.exports = router;
