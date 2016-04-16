var express = require('express');
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

module.exports = router;
