let mongoose = require('mongoose');
let commentSchema = require('./schemas/commentSchema');

module.exports = function(db){
	let Comment;
	if (db.models.Comment) {
		Comment = db.model('Comment');
	} else {
		db = mongoose;
		Comment = db.model('Comment', commentSchema);
	}
	return Comment;
}