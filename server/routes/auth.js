var express = require('express');
var apiRouter = express.Router();
var config = require('../../config/config');
var usermodel = require('../models/users');
var authCall = require('./authCalls');

// config secret 
// create authentication route /users/auth
apiRouter.post('/auth', authCall.auth);

// route middeleware to varify token
apiRouter.use(authCall.allRouters);
// route for get all validate user
apiRouter.get('/alluser', authCall.allUsers);

apiRouter.get('/', function(req, res){
	res.send('respond with a resource');
});

module.exports = apiRouter;