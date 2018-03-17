let express = require('express');
let router = express.Router();
let articles = require('./articles/articles');

router.get('/create', articles.create);
router.get('/update', articles.update);
router.get('/delete', articles.remove);

module.exports = router;