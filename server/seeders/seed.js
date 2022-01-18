const db = require('../config/connection');
const { Seeker } = require('../models');
const acctSeed = require('./accountSeed.json');

db.once('open', async () => {
  try {
    await Seeker.deleteMany({});
    await Seeker.create(acctSeed);

    console.log('JS data done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
