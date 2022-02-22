const db = require('../config/connection');
const { Customer, Service, Appointments } = require('../models');
const customerSeed = require('./customerSeed.json');
const serviceSeed = require('./serviceSeed.json');
const appointmentSeed = require('./appointmentSeed.json');

db.once('open', async () => {
  try {
    await Customer.deleteMany({});
    await Customer.create(customerSeed);

    await Service.deleteMany({});
    await Service.create(serviceSeed);

    await Appointments.deleteMany({});
    await Appointments.create(appointmentSeed);

    console.log('Seed done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
