const mongoose = require('mongoose');
const ClientSchema = new mongoose.Schema({
	user_name: {
		type: String,
		required: 'This field is required'
	},
	client_Name: {
		type: String,
		required: 'This field is required'
	},
	client_Number: {
		type: 'String',
		required: 'This field is required'
	}
});
const Client = mongoose.model('client', ClientSchema);
module.exports = Client;