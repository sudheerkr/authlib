let express = require('express');
let router = express.Router();
let comments = require('./comments/comments');

router.get('/create', comments.create);
router.get('/update', comments.update);
router.get('/delete', comments.remove);

module.exports = router;