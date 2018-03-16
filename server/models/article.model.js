let mongoose = require('mongoose');
let articleSchema = require('./schemas/articleSchema');

module.exports = function(db){
	let Article;
	if (db.models.Article) {
		Article = db.model('Article');
	} else {
		db = mongoose;
		Article = db.model('Article', articleSchema);
	}
	return Article;
}