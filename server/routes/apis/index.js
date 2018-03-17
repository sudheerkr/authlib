let express = require('express');
let router = express.Router();
let userController = require('../../controllers/users.routes');
let articleController = require('../../controllers/articles.routes');
let commentController = require('../../controllers/comments.routes');

router.use('/users', userController);
router.use('/articles', articleController);
router.use('/comments', commentController);

module.exports = router;