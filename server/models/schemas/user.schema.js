let userSchema = {
	email : {
		type : String,
		required : true
	},
	name : {
		type : String
	},
	dob : {
		type : Date
	},
	created_at : {
		type : Date,
		default : Date.now
	},
	update_at : {
		type : Date,
		default : Date.now
	},
	login_at : {
		type : Date,
		default : Date.now
	},
	is_deleted : {
		type : Boolean,
		default : false
	}
}

module.exports = userSchema;