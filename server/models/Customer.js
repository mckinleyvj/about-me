const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment');

const customerSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    unique: false,
    trim: false,
  },
  contact_no: {
    type: Number,
    required: true,
    unique: false,
    trim: true,
    match: [/^(\d{7})$/],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
  },
  createAt: {
    type: Date,
    default: Date.now,
    get: (createdAtDT) => moment(createdAtDT).format('MMM DD, YYYY [at] hh:mm a')
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
  },
  isEnabled: {
    type: Boolean,
    required: true,
  },
});

// set up pre-save middleware to create password
customerSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
customerSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Customer = model('Customer', customerSchema);

module.exports = Customer;
