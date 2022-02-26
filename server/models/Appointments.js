const { Schema, model } = require('mongoose');
const moment = require('moment');

const apptSchema = new Schema({
	service_type: {
		type: String,
		required: true,
	},
	customer: {
		type: String,
	},
	datetime: {
		type: Date,
		default: Date.now,
		get: (datetimeDt) => moment(datetimeDt).format('DD/MM/YYYY'),
	},
	approved: {
		type: Boolean,
		default: true,
	},
	branch: {
		type: String,
	},
	staff: {
		type: String,
	},
});

const Appointments = model('Appointments', apptSchema);
module.exports = Appointments;
