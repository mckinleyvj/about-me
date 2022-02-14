const { Schema, model } = require("mongoose");

const schedSchema = new Schema({
  email: {
    type: String,
  },
  dateTime: {
    type: String,
  },
  approved: {
    type: Boolean,
    required: true,
  }
});

const Schedule = model("Schedule", schedSchema);
module.exports = Schedule;