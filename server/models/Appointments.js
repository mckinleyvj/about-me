const { Schema, model } = require("mongoose");

const apptSchema = new Schema({
  service_type: {
    type: String,
    required: true
  },
  customer: {
    type: String,
  },
  datetime: {
    type: Date,
  },
  approved: {
    type: Boolean,
    required: true
  }
});

const Appointments = model("Appointments", apptSchema);
module.exports = Appointments;