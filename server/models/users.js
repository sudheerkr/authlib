'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('../../config/config');

mongoose.connect(config.database);

module.exports = mongoose.model('User', new Schema({
	name: String,
	password: String,
	admin: Boolean
}));