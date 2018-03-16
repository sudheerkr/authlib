const mongoose = require("mongoose");
const configs = require("../../configs/configs");
const options = {};
// connect connection
mongoose.connect(configs.db_url, options).then(function(){
	console.log('you are ready for use.')
}, function(error){
	console.error("hanlde initial connection error.");
	process.exit(0);
});
let db = mongoose.connection;
// error on connection failure
db.on("error", console.error.bind(console, "connection error"));
// create connection with db
db.once("open", function(){
	console.log("connection successfully created.");
});
// disconnected db
db.on('disconnected', function(){
	console.log("mongoose default connection disconnected.");
});
// if node process end then close db connection
db.on("SIGINT", function(){
	db.close(function(){
		console.log("Mongoose default connection disconnected through app termination");
		process.exit(0);
	});
});
