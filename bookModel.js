var mongoose = require('mongoose');

var Model = mongoose.model('Book', new mongoose.Schema({
	title: {type: String},
	author: {type: String},
	genre: {type: String},
	read: {type: Boolean, default:false}
}));

module.exports = Model;