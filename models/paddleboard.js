const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
	brand: {type: String, required: true},
	type: {type: String, required: true},
	year_founded: {type: Number},
	location: {type: String}
});

module.exports = mongoose.model('paddleboard', boardSchema);