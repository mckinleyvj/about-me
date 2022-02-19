const db = require('../config/connection');
const { Customer, Service } = require('../models');
const customerSeed = require('./customerSeed.json');
const serviceSeed = require('./serviceSeed.json');

db.once('open', async () => {
  try {
    await Customer.deleteMany({});
    await Customer.create(customerSeed);

    await Service.deleteMany({});
    await Service.create(serviceSeed);

    console.log('Seed done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
