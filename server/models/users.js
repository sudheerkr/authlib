'use strict';

// get mongoose instance
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../../config/config');

// db config
mongoose.connect(config.database);

// create users models 
module.exports = mongoose.model('User', new Schema({
	name: String,
	password: String,
	admin: Boolean
}));