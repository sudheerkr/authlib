let mongoose = require('mongoose');
let db = mongoose.connection;

exports.User = require('./user.model')(db);
exports.Comment = require('./comment.model')(db);
exports.Article = require('./article.model')(db);