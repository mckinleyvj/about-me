const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment');

const seekersSchema = new Schema({
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
});

// set up pre-save middleware to create password
seekersSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
seekersSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Seekers = model('Seekers', seekersSchema);

module.exports = Seekers;
