let userSchema = {
	email : {
		type : String,
		unique : true,
		required : true
	},
	password : {
		type : String,
		required: true
	},
	name : {
		type : String
	},
	userType : {
		type : String,
		enum : ['customer', 'admin', 'partner'],
		default : 'customer'
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
	status : {
		type : Boolean,
		default : false
	}
}

module.exports = userSchema;