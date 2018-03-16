let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = {
	title : {
		type : String
	},
	slug : {
		type : String
	},
	content : {
		type : String
	},
	author :{
		"$ref" : 'Users',
		type : Schema.Types.ObjectId
	},
	author_name : {
		type : String
	},
	cretaed_at : {
		type : Date,
		default: Date.now
	},
	update_at : {
		type : Date,
		default: Date.now
	},
	is_deleted : {
		type : Boolean,
		default : false
	}
}

module.exports = articleSchema;