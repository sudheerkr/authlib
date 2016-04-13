'use strict';

// get mongoose instance
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create users models 

module.exports = mongoose.model('User', new Schema({
	name: String,
	password: String,
	admin: Boolean
}));