let express = require('express');
let router = express.Router();
let users = require('./users/users');

router.get('/signup', users.signup);
router.get('/login', users.login);
router.get('/logout', users.logout);
router.get('/delete', users.remove);

module.exports = router;