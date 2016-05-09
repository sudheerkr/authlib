var express = require('express');
var router = express.Router();
var usermodel = require('../models/users');
var envPort =  parseInt(process.env.PORT || '3000');
/* GET home page. */
router.get('/new', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res){
	// res.send('Hello! The api is at http://localhost: '+envPort+ '/api');
	res.render('index');
});

router.get('/setup', function(req, res){
	// create simple user
	var ram = new usermodel({
		name: 'RAm RAm',
		password: 'password',
		admin: true
	});

	// save user to db 
	ram.save(function(err){
		if (err) {
			throw err;
		}else{
			console.log('ram save sucessfuly');
			res.json({sucess:true});
		}
	});
});

module.exports = router;
