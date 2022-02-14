const db = require('../config/connection');
const { Customer } = require('../models');
const customerSeed = require('./accountSeed.json');

db.once('open', async () => {
  try {
    await Customer.deleteMany({});
    await Customer.create(customerSeed);

    console.log('Customer data done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
