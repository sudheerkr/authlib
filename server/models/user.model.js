let mongoose = require('mongoose');
let userSchema = require('./schemas/userSchema');

module.exports = function(db){
	let User;
	if (db.models.User) {
		User = db.model('User');
	} else {
		db = mongoose;
		User = db.model('User', userSchema);
	}
	return User;
}