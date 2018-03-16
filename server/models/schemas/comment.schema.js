let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let commentSchema = {
	article : {
		"ref" : "Articles",
		type : Schema.Types.ObjectId
	},
	author : {
		"ref" : "Users",
		type : Schema.Types.ObjectId
	},
	author_name : {
		type : String
	},
	text : {
		type : String
	},
	created_at : {
		type : Date,
		default : Date.now
	},
	update_at :{
		type : Date,
		default : Date.now
	},
	is_deleted : {
		type : Boolean,
		default : false
	}
}

module.exports = commentSchema;